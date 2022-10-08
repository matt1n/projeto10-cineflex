import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SeatsForm from "../../SeatsForm";
import SeatsContainer from "./SeatsContainer";
import SeatsKey from "./SeatsKey";

export default function ChoseSeats({ setTicket, dark }) {
  const [seats, setSeats] = useState([]);
  const { sessionId } = useParams();
  const [selected, setSelected] = useState([]);
  const [seatsSelecteds, setSeatsSelecteds] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`
    );
    promise.then((reply) => setSeats(reply.data));
    promise.catch((reply) => console.log(reply.release.data));
  }, [sessionId]);

  return (
    <ChooseSeatsFormat dark={dark}>
      <h1>Selecione o(s) assento(s)</h1>

      <SeatsContainer
        seats={seats}
        selected={selected}
        setSelected={setSelected}
        seatsSelecteds={seatsSelecteds}
        setSeatsSelecteds={setSeatsSelecteds}
      ></SeatsContainer>

      <SeatsKey dark={dark}></SeatsKey>

      <SeatsForm
        dark={dark}
        seats={seats}
        selected={selected}
        setTicket={setTicket}
        seatsSelecteds={seatsSelecteds}
      ></SeatsForm>

      <SeatsFooter dark={dark}>
        <div>
          {seats.length !== 0 && (
            <img
              src={seats.movie.posterURL}
              alt={`Poster ${seats.movie.title}`}
            />
          )}
        </div>
        <span>
          <h2>{seats.length !== 0 && seats.movie.title}</h2>
          <h2>
            {seats.length !== 0 && `${seats.day.weekday} - ${seats.name}`}
          </h2>
        </span>
      </SeatsFooter>
    </ChooseSeatsFormat>
  );
}

const ChooseSeatsFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20.5px 0 20.5px;
  margin-bottom: 117px;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#333333"};
  h1 {
    height: 100px;
    font-family: "Roboto";
    font-size: 24px;
    color: ${(props) => (props.dark === false ? "#293845" : "#ffffff")};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SeatsFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  background-color: ${(props) => (props.dark ? "#121212" : " #DFE6ED")};
  display: flex;
  align-items: center;
  div {
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: ${(props) =>
      props.dark === false ? "#fffffff" : "#E8833A"};
    margin-right: 14px;
    margin-left: 10px;
  }
  img {
    width: 48px;
    height: 72px;
  }
  h2 {
    font-family: "Roboto";
    font-size: 26px;
    color: ${(props) => (props.dark === false ? "#293845" : "#ffffff")};
  }
  span {
    display: block;
  }
`;
