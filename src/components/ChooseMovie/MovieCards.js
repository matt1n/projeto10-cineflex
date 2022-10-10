import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieCards({ movieObject, dark }) {
  return (
    <MovieCardsFormat dark={dark} data-identifier="session-date">
      <Link to={`/sessoes/${movieObject.id}`}>
        <img
          src={movieObject.posterURL}
          alt={"poster do filme " + movieObject.title}
        />
      </Link>
    </MovieCardsFormat>
  );
}

const MovieCardsFormat = styled.div`
  width: 145px;
  height: 209px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px ${props=> props.dark ? "#00000030": "#0000001a"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 11px;
  background-color: ${(props) =>
    props.dark === false ? "#fffffff" : "#E8833A"};
  img {
    width: 129px;
    height: 193px;
  }
`;
