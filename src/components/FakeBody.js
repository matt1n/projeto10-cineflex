import styled from "styled-components";

export default function FakeBody({ dark }) {
  return <FakeBodyFormat dark={dark} />;
}

const FakeBodyFormat = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#333333"};
  z-index: -1;
`;
