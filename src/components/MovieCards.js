import { Link } from "react-router-dom"
import styled from "styled-components"

export default function MovieCards({sim, dark}) {
    return(
        <MovieCardsFormat dark={dark}>
            <Link to={`/sessoes/${sim.id}`}>
                <img src={sim.posterURL} alt={"poster do filme " + sim.title}/>
            </Link>
        </MovieCardsFormat>
    )
};

const MovieCardsFormat = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
    background-color: ${props=> props.dark===false ? '#fffffff':'#E8833A'};
    img{
        width: 129px;
        height: 193px;
    }
`
