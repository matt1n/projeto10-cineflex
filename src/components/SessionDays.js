import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SessionDays({s, dark}) {
    return(
        <SessionDaysFormat dark={dark}>
            <p>{s.weekday + " " + s.date}</p>
            {s.showtimes.map((st, i)=>
            <Link key={st.id} to={`/assentos/${st.id}`}>
                <button > {st.name} </button>
            </Link>
            )}
        </SessionDaysFormat>
    )
};

const SessionDaysFormat = styled.div`
    p{
        margin-bottom: 30px;
        font-family: "Roboto";
        font-size: 20px;
        color: ${props=> props.dark===false ? '#000000' : '#ffffff'};
    }
    button{
        width: 83px;
        height: 43px;
        margin-right: 8px;
        margin-bottom: 30px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-family: "Roboto";
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
`