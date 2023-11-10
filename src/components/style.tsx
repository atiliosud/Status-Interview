import styled from "styled-components";

export const Container = styled.div<{
  backgroundColor?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flex?: number;
}>`
  background-color: ${(props) => props.backgroundColor || "#fff"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
