import styled from "styled-components";

export default function Loading({ dark }) {
  return <LoadingScreen dark={dark}></LoadingScreen>;
}

const LoadingScreen = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#333333"};
  background-image: url("https://media.tenor.com/JE9a1pXsSKQAAAAi/popcorn.gif");
`;
