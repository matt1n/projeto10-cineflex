import { Link, useHref } from "react-router-dom"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import DarkMode from "./DarkMode"

export default function Header({dark, setDark}) {
    const navigate = useNavigate()
    const href = useHref()
    return (
    <HeaderFormat dark={dark}>
        {href!=="/" && <BackButton onClick={()=>navigate(-1)}>{"< Voltar"}</BackButton>}
        <h1><Link to="/">CINEFLEX</Link></h1>
        <DarkMode dark={dark} setDark={setDark}></DarkMode>
    </HeaderFormat>
    )
};

const HeaderFormat = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.dark ? "#0a0a0a" : "#C3CFD9"};
    position: relative;
    a{
        font-family: "Roboto";
        font-size: 34px;
        color: #E8833A;
        text-decoration: none;
    }
`
const BackButton = styled.button`
   background-color: #E8833A;
    border: none;
    border-radius: 3px;
    font-family: "Roboto";
    font-size: 20px;
    color: #FFFFFF;
    position: absolute;
    left: 15px;
    cursor: pointer; 
`
