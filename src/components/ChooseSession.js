import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import SessionDays from "./SessionDays"

export default function ChooseSession() {

    const {movieId} = useParams()
            
    const [session, setSession] = useState([])

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        promise.then((sim)=> setSession(sim.data))
        promise.catch((sim)=> setSession(sim.release.data))
    }, [movieId])
    
    return (
        <ChooseSessionFormat>
            <h1>Selecione o Horário</h1>
            {session.length!==0 && session.days.map((s, i)=> <SessionDays key={s.id} s={s}/>)}
            <SessionFooter>
                <div>
                    <img src={session.posterURL} alt={`Poster ${session.title}`}/>
                </div>
                <h2>{session.title}</h2>

            </SessionFooter>
        </ChooseSessionFormat>
    )
};

const ChooseSessionFormat = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 27.5px;
    margin-bottom: 117px;
    h1{
        height: 100px;
        font-family: "Roboto";
        font-size: 24px;
        color: #293845;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const SessionFooter= styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    display: flex;
    align-items: center;
    div{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        background-color: #FFFFFF;
        margin-right: 14px;
        margin-left: 10px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    h2{
        font-family: 'Roboto';
        font-size: 26px;
        color: #293845;
    }
`
