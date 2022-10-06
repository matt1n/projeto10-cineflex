import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function ChoseSeats({setTicket}) {
    
    const [seats, setSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const {sessionId} = useParams()
    const [selected, setSelected] = useState([])
    const post = {
        ids:selected,
        name: name,
        cpf: cpf
    }
    const [seatsSelecteds, setSeatsSelecteds] = useState([])
    console.log(post)
    console.log(name, cpf)

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then((sim)=>setSeats(sim.data))
        promise.catch((sim)=>console.log(sim.data))
    }, [sessionId])

    function statusCheck(status){
        if (status.isAvailable===true){
            return (selected.includes(status.id) ? "#1AAE9E" : "#C3CFD9")
        } else {
            return "#FBE192"
        }
    }

    function selectAndDeselect(status){
        if (status.isAvailable===true){
            if (!selected.includes(status.id)) {
                setSelected([...selected, status.id])
                setSeatsSelecteds([...seatsSelecteds, status.name])
            } else {
                const idsFiltered = selected.filter((ids)=> ids!==status.id)
                setSelected([...idsFiltered])
                const namesFiltered = seatsSelecteds.filter((names)=> names!==status.name)
                setSeatsSelecteds([...namesFiltered])
            }
        }
    }

    function postTicket(seats){
        setTicket({
            title:seats.movie.title,
            day:seats.day.date,
            hour:seats.name,
            seats:seatsSelecteds,
            name:name,
            cpf:cpf
        })
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", post)
        promise.then((sim)=>console.log(sim.data))
        promise.catch((sim)=>console.log(sim.release.data))
    }

    console.log(seats)

    return (
        <ChooseSeatsFormat>

            <h1>Selecione o(s) assento(s)</h1>

            <AllSeats>
                {seats.length !== 0 && seats.seats.map((s, i)=> <Seat onClick={()=>selectAndDeselect(s)} iconColor={()=> statusCheck(s)} key={i}>{s.name}</Seat>)}
            </AllSeats>

            <SeatKeys>
                <div>
                    <GreenKey></GreenKey>
                    <p>Selecionado</p>
                </div>
                <div>
                    <GrayKey></GrayKey>
                    <p>Disponível</p>
                </div>
                <div>
                    <YellowKey></YellowKey>
                    <p>Indisponível</p>
                </div>
            </SeatKeys>
            <form>
                <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setName(e.target.value)}></input>
                <input type="text" placeholder="Digite seu CPF..." onChange={(e)=> setCpf(e.target.value)}></input>
                <Link to="/sucesso">
                    <button type="submit" onClick={()=>postTicket(seats)}>Reservar assento(s)</button>
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
    background-color: ${props=> props.iconColor};
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
const GrayKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
`

const GreenKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #1AAE9E;
`
const YellowKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #FBE192;
`