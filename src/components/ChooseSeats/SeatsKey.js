import styled from "styled-components";

export default function SeatsKey({ dark }) {
  return (
    <SeatsKeyFormat dark={dark}>
      <div>
        <GreenKey data-identifier="seat-selected-subtitle"></GreenKey>
        <p>Selecionado</p>
      </div>
      <div>
        <GrayKey data-identifier="seat-available-subtitle"></GrayKey>
        <p>Disponível</p>
      </div>
      <div>
        <YellowKey data-identifier="seat-unavailable-subtitle"></YellowKey>
        <p>Indisponível</p>
      </div>
    </SeatsKeyFormat>
  );
}

const SeatsKeyFormat = styled.span`
  width: 275px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28.5px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-family: "Roboto";
    font-size: 13px;
    color: ${(props) => (props.dark === false ? "#000000" : "#ffffff")};
  }
`;
const GrayKey = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: #c3cfd9;
  border: 1px solid #7b8b99;
`;

const GreenKey = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: #1aae9e;
  border: 1px solid #0e7d71;
`;
const YellowKey = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: #fbe192;
  border: 1px solid #f7c52b;
`;
