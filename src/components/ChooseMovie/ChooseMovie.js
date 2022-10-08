import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCards from "./MovieCards";

export default function ChooseMovie({ dark }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((reply) => setMovie(reply.data));
    promise.catch((reply) => console.log(reply.release.data));
  }, []);
  console.log(movie);
  return (
    <ChooseMovieFormat dark={dark}>
      <p>Selecione o Filme</p>
      <span>
        {movie.map((movieObject, i) => (
          <MovieCards key={i} movieObject={movieObject} dark={dark} />
        ))}
      </span>
    </ChooseMovieFormat>
  );
}

const ChooseMovieFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 27.5px;
  background-color: ${(props) =>
    props.dark === false ? "#ffffff" : "#333333"};
  p {
    height: 100px;
    font-family: "Roboto";
    font-size: 24px;
    color: ${(props) => (props.dark === false ? "#293845" : "#ffffff")};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
