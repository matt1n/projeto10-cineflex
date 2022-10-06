import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ChoseSeats() {
    
    const [seats, setSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    console.log(name, cpf)

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/65/seats')
        promise.then((sim)=>setSeats(sim.data))
        promise.catch((sim)=>console.log(sim.data))
    }, [])

    console.log(seats)

    return (
        <ChooseSeatsFormat>

            <h1>Selecione o(s) assento(s)</h1>

            <AllSeats>
                {seats.length !== 0 && seats.seats.map((s, i)=> <Seat>{s.name}</Seat>)}
            </AllSeats>

            <SeatKeys>
                <div>
                    <IconKey></IconKey>
                    <p>Selecionado</p>
                </div>
                <div>
                    <IconKey></IconKey>
                    <p>Disponível</p>
                </div>
                <div>
                    <IconKey></IconKey>
                    <p>Indisponível</p>
                </div>
            </SeatKeys>
            <form /*onSubmit={}*/>
                <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setName(e.target.value)}></input>
                <input type="text" placeholder="Digite seu CPF..." onChange={(e)=> setCpf(e.target.value)}></input>
                <Link to="/sucesso">
                    <button type="submit">Reservar assento(s)</button>
                </Link>
            </form>
            <SeatsFooter>
                <div>
                    {seats.length !== 0 && <img src={seats.movie.posterURL} alt={`Poster ${seats.movie.title}`}/>}
                </div>
                <span>
                    <h2>{seats.length !== 0 && seats.movie.title}</h2>
                    <h2>{seats.length !== 0 && `${seats.day.weekday} - ${seats.name}`}</h2>
                </span>
            </SeatsFooter>

        </ChooseSeatsFormat>
    )
};

const ChooseSeatsFormat = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 20.5px 0 20.5px;
    h1{
        height: 100px;
        font-family: "Roboto";
        font-size: 24px;
        color: #293845;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form{
        display: flex;
        flex-direction: column;
        button{
            width: 100%;
        }
    }
`
const SeatsFooter = styled.div`
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
    span{
        display: block;
    }
`
const AllSeats = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Seat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
    margin-left: 5px;
    margin-right: 3.5px;
    margin-bottom: 18px;
`
const SeatKeys = styled.span`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48.5px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const IconKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
`