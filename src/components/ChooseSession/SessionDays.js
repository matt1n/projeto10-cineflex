import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionDays({ s, dark }) {
  return (
    <SessionDaysFormat dark={dark}>
      <p data-identifier="session-date">{s.weekday + " " + s.date}</p>
      {s.showtimes.map((st, i) => (
        <Link key={st.id} to={`/assentos/${st.id}`}>
          <button data-identifier="hour-minute-btn"> {st.name} </button>
        </Link>
      ))}
    </SessionDaysFormat>
  );
}

const SessionDaysFormat = styled.div`
  p {
    margin-bottom: 30px;
    font-family: "Roboto";
    font-size: 20px;
    color: ${(props) => (props.dark === false ? "#000000" : "#ffffff")};
  }
  button {
    width: 83px;
    height: 43px;
    margin-right: 8px;
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
