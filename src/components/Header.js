import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return (
    <HeaderFormat>
        <p><Link to="/">CineFlex</Link></p>
    </HeaderFormat>
    )
};

const HeaderFormat = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    a{
    font-family: "Roboto";
    font-size: 34px;
    color: #E8833A;
    text-decoration: none;
    }
`
