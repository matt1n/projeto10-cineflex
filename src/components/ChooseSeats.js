import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function ChoseSeats({setTicket, dark}) {
    
    const [seats, setSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const {sessionId} = useParams()
    const [selected, setSelected] = useState([])
    const body = {
        ids:selected,
        name,
        cpf
    }
    const [seatsSelecteds, setSeatsSelecteds] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then((sim)=>setSeats(sim.data))
        promise.catch((sim)=>console.log(sim.data))
    }, [sessionId])

    function statusCheckColor(status){
        if (status.isAvailable===true){
            return (selected.includes(status.id) ? "#1AAE9E" : "#C3CFD9")
        } else {
            return "#FBE192"
        }
    }

    function statusCheckBorder(status){
        if (status.isAvailable===true){
            return (selected.includes(status.id) ? "#0E7D71" : "#7B8B99")
        } else {
            return "#F7C52B"
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

    function postTicket(e){
       
        e.preventDefault();
        
        if(selected.length!==0){
            setTicket({
                title:seats.movie.title,
                day:seats.day.date,
                hour:seats.name,
                seats:seatsSelecteds,
                name:name,
                cpf:cpf
            })
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
            promise.then(navigate("/sucesso"))
            promise.catch((sim)=>console.log(sim.release.data))
        } else {
            alert('Selecione um assento!')
        }
    }

    console.log(seats)

    return (
        <ChooseSeatsFormat dark={dark}>

            <h1>Selecione o(s) assento(s)</h1>

            <AllSeats>
                {seats.length !== 0 && seats.seats.map((s, i)=> <Seat onClick={()=>selectAndDeselect(s)} iconBorder={()=> statusCheckBorder(s)} iconColor={()=> statusCheckColor(s)} key={i}>{s.name}</Seat>)}
            </AllSeats>

            <SeatKeys dark={dark}>
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
            <form onSubmit={postTicket}>
                <label>Nome do comprador:
                    <input required 
                    type="text" 
                    value={name} 
                    placeholder="Digite seu nome..." 
                    onChange={(e)=>setName(e.target.value)}>
                    </input>
                </label>
                
                <label>CPF do comprador:
                    <input 
                    required 
                    type="number" 
                    min="10000000000"
                    max="99999999999"
                    value={cpf} 
                    placeholder="Digite seu CPF..." 
                    onChange={(e)=> setCpf(e.target.value)}>
                    </input>
                </label>
                <button type="submit">Reservar assento(s)</button>
            </form>
            <SeatsFooter dark={dark}>
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
    margin-bottom: 117px;
    background-color: ${props=> props.dark===false ? "#ffffff" : '#333333'};
    h1{
        height: 100px;
        font-family: "Roboto";
        font-size: 24px;
        color: ${props=> props.dark===false ? '#293845' : '#ffffff'};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        label{
            font-family: "Roboto";
            font-size: 18px;
            color: ${props=> props.dark===false ? '#000000' : '#ffffff'};
        }
        input{
            width: 100%;
            height: 51px;
            border-radius: 3px;
            border: 1px solid #D4D4D4;
            background-color: #FFFFFF;
            margin-top: 5px;
            margin-bottom: 10.5px;
            padding-left: 18px;
            color: #293845;
            font-family: "Roboto";
            font-size: 18px;
            &::placeholder{
                color: #AFAFAF;
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
        input[type=number] {
        -moz-appearance: textfield;
        }
        button{
        width: 225px;
        height: 42px;
        margin-right: 8px;
        margin-top: 57px;
        margin-bottom: 30px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-family: "Roboto";
        font-size: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
    }
`
const SeatsFooter = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    background-color: ${props=>props.dark ? "#0a0a0a" : " #DFE6ED"};
    display: flex;
    align-items: center;
    div{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        background-color: ${props=> props.dark===false ? '#fffffff':'#E8833A'};
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
        color: ${props=> props.dark===false ? '#293845' : '#ffffff'};
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
    border: 1px solid ${props=> props.iconBorder};
    margin-left: 5px;
    margin-right: 3.5px;
    margin-bottom: 18px;
    font-family: Roboto;
    font-size: 11px;
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
    p{
        font-family: "Roboto";
        font-size: 13px;
        color: ${props=> props.dark===false ? '#000000' : '#ffffff'};
    }
`
const GrayKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
`

const GreenKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #1AAE9E;
    border: 1px solid #0E7D71
`
const YellowKey = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`