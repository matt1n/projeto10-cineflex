import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sucess({ticket}) {
    return(
        <SucessFormat>
            <h1>Pedido feito <br/> com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <div>
                <p>{ticket.title}</p>
                <p>{ticket.day + " " + ticket.hour}</p>
            </div>
            <h2>Ingressos</h2>
            {ticket.seats.map((s,i)=> <p key={i}>Assento {s}</p>)}
            <h2>Comprador</h2>
            <div>
                <p>Nome: {ticket.name}</p>
                <p>CPF: {ticket.cpf}</p>
            </div>
            <span>
                <Link to="/">
                    <button>Voltar pra Home</button>
                </Link>
            </span>
        </SucessFormat>
    )
};

const SucessFormat = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 29px;
    h1{
        height: 100px;
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 700;
        color: #247A6B;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-top: 25px;
    }
    div{
        margin-top: 10px;
        margin-bottom: 40px;
    }
    p{
        font-family: "Roboto";
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-top: 5px;
    }
    span{
        display: flex;
        justify-content: center;
        margin-top: 75px;
    }
    button{
        width: 225px;
        height: 42px;
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