import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Container, Wrapper } from "./components/style";
import Card from "./components/Card";
import api from "./api";
export type ItemProps = {
  hostname: string;
  message: string;
  success: boolean;
  term: string;
  time: number;
};
function App() {
  const terms: string[] = [
    "accounts",
    "assets",
    "customers",
    "datapoints",
    "devices",
    "documents",
    "forms",
    "invites",
    "media",
    "messages",
    "namespaces",
    "orders",
    "patients",
    "relationships",
    "rules",
    "templates",
    "users",
    "workflows",
  ];
  const interval = process.env.REACT_APP_INTERVAL_TIME || 0;
  console.log("interval", interval);
  const [item, setItem] = useState<ItemProps[]>([]);
  const getData = async () => {
    try {
      let dataArray: ItemProps[] = [];
      for (let term of terms) {
        try {
          const { data } = await api.find(term);
          dataArray.push({ term, ...data });
        } catch (error: any) {
          console.error(`Erro na requisição para "${term}":`, error);
          dataArray.push({
            term,
            hostname: "",
            message: "",
            success: false,
            time: Date.now(),
          });
        }
      }
      setItem(dataArray);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  useEffect(() => {
    getData();
    setInterval(() => {
      getData();
    }, Number(interval) * 1000); //seconds
  }, []);
  return (
    <Wrapper>
      <Header />
      <Container flexDirection="row" backgroundColor="#d3d3d3" flex={1}>
        {item.map((item) => (
          <Card item={item} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default App;
