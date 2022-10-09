import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";

export default function SeatsForm({
  dark,
  seats,
  selected,
  setTicket,
  seatsSelecteds,
}) {
  const navigate = useNavigate();
  const [buyers, setBuyers] = useState([]);
  const body = {
    ids: selected,
    compradores: buyers,
  };

  function postTicket(e) {
    e.preventDefault();

    let newBuyers = [];
    seatsSelecteds.map(
      (s, i) =>
        (newBuyers = [
          ...newBuyers,
          {
            idAssento: s,
            nome: e.target[i * 2].value,
            cpf: e.target[i * 2 + 1].value,
          },
        ])
    );
    setBuyers(newBuyers);

    if (selected.length !== 0) {
      setTicket({
        title: seats.movie.title,
        day: seats.day.date,
        hour: seats.name,
        seats: seatsSelecteds,
        compradores: newBuyers,
      });
      const promise = axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        body
      );
      promise.then(navigate("/sucesso"));
      promise.catch((reply) => console.log(reply.release.data));
    } else {
      alert("Selecione um assento!");
    }
  }

  return (
    <FormFormat onSubmit={postTicket} dark={dark}>
      {seatsSelecteds.map((s, i) => (
        <Fragment key={i}>
          <FormSeatNumber dark={dark}>{`Assento ${s}:`}</FormSeatNumber>
          <label>
            Nome do comprador:
            <input
              required
              type="text"
              placeholder="Digite seu nome..."
              data-identifier="buyer-name-input"
            ></input>
          </label>

          <label>
            CPF do comprador:
            <input
              required
              type="number"
              min="10000000000"
              max="99999999999"
              placeholder="Digite seu CPF..."
              data-identifier="buyer-cpf-input"
            ></input>
          </label>
        </Fragment>
      ))}
      <button type="submit" data-identifier="reservation-btn">
        Reservar assento(s)
      </button>
    </FormFormat>
  );
}

const FormFormat = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-family: "Roboto";
    font-size: 18px;
    color: ${(props) => (props.dark === false ? "#000000" : "#ffffff")};
  }
  input {
    width: 100%;
    height: 51px;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
    background-color: #ffffff;
    margin-top: 5px;
    margin-bottom: 10.5px;
    padding-left: 18px;
    color: #293845;
    font-family: "Roboto";
    font-size: 18px;
    &::placeholder {
      color: #afafaf;
      font-family: "Roboto";
      font-size: 18px;
      font-style: italic;
      font-weight: 400;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  button {
    width: 225px;
    height: 42px;
    margin-right: 8px;
    margin-top: 57px;
    margin-bottom: 30px;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
    font-family: "Roboto";
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }
`;

const FormSeatNumber = styled.p`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 38px;
  margin-top: 20px;
  font-family: "Roboto";
  font-size: 24px;
  color: ${(props) => (props.dark === false ? "#293845" : "#ffffff")};
`;
