import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Sucess({ ticket, dark }) {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (
    <SucessFormat dark={dark}>
      <h1>
        Pedido feito <br /> com sucesso!
      </h1>

      <Topic dark={dark}>Filme e sessão</Topic>
      <InformationFormat>
        <Information
          dark={dark}
          data-identifier="movie-session-infos-reserve-finished"
        >
          {ticket.title}
        </Information>
        <Information
          dark={dark}
          data-identifier="movie-session-infos-reserve-finished"
        >
          {ticket.day + " " + ticket.hour}
        </Information>
      </InformationFormat>

      <Topic dark={dark}>Comprador por ingressos</Topic>
      {ticket.compradores.map((s) => (
        <InformationFormat key={s.idAssento}>
          <SeatNumber dark={dark} data-identifier="seat-infos-reserve-finished">
            Assento {s.idAssento}
          </SeatNumber>
          <Information
            dark={dark}
            data-identifier="buyer-infos-reserve-finished"
          >
            Nome: {s.nome}
          </Information>
          <Information
            dark={dark}
            data-identifier="buyer-infos-reserve-finished"
          >
            CPF: {s.cpf}
          </Information>
        </InformationFormat>
      ))}

      <HomeButtonFormat>
        <HomeButton
          onClick={() => navigate("/")}
          data-identifier="back-to-home-btn"
        >
          Voltar pra Home
        </HomeButton>
      </HomeButtonFormat>
    </SucessFormat>
  );
}

const SucessFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 29px;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#333333"};
  margin-top: 67px;
  h1 {
    height: 100px;
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => (props.dark === false ? "#247A6B" : "#2abf72")};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Topic = styled.h2`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.dark === false ? "#293845" : "#ffffff")};
  margin-top: 25px;
`;
const InformationFormat = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
`;
const Information = styled.p`
  font-family: "Roboto";
  font-size: 22px;
  font-weight: 400;
  color: ${(props) => (props.dark === false ? "#293845" : "#ffffff")};
  margin-top: 5px;
`;
const SeatNumber = styled(Information)`
  font-weight: 700;
`;
const HomeButtonFormat = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 75px;
`;
const HomeButton = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border: none;
  border-radius: 3px;
  font-family: "Roboto";
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 50px;
`;
