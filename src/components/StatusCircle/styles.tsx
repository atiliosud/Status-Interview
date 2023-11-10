import styled from "styled-components";

export const Circle = styled.div<{
  status: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;
