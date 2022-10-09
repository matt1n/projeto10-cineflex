import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../Loading";
import SessionDays from "./SessionDays";

export default function ChooseSession({ dark }) {
  const { movieId } = useParams();
  const [session, setSession] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`
    );
    promise.then((reply) => setSession(reply.data));
    promise.catch((reply) => setSession(reply.release.data));
  }, [movieId]);

  if (session.length === 0) {
    return <Loading dark={dark} />;
  }

  return (
    <ChooseSessionFormat dark={dark}>
      <h1>Selecione o Horário</h1>
      {session.length !== 0 &&
        session.days.map((s, i) => (
          <SessionDays key={s.id} s={s} dark={dark} />
        ))}
      <SessionFooter dark={dark} data-identifier="movie-img-preview">
        <div>
          <img src={session.posterURL} alt={`Poster ${session.title}`} />
        </div>
        <h2 data-identifier="movie-and-session-infos-preview">
          {session.title}
        </h2>
      </SessionFooter>
    </ChooseSessionFormat>
  );
}

const ChooseSessionFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 27.5px;
  margin-bottom: 117px;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#333333"};
  margin-top: 67px;
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
const SessionFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  border-top: 1px solid ${(props) => (props.dark ? "#ab5a1f" : "#9EADBA")};
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.dark ? "#121212" : "#C3CFD9")};
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
`;
