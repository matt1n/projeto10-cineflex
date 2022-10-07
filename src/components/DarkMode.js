import styled from "styled-components"

export default function DarkMode({dark, setDark}) {
    
    function switchMode(){
        if (dark===false){
            setDark(true)
        } else {
            setDark(false)
        }
    }
    
    return (
        <DarkModeButton dark={dark} onClick={switchMode}>{dark===false ? "Dark 🌙" : "Light ☀️"}</DarkModeButton>
    )
};

const DarkModeButton = styled.button`
    font-family: "Roboto";
    font-size: 17px;
    background-color: ${props=> props.dark ? '#ffffff' : "#333333"};
    color: ${props=> props.dark ? "#000000" : '#ffffff'};
    border: none;
    border-radius: 3px;
    position: absolute;
    right: 15px;
`