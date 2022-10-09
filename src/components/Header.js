import { Link, useHref } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";

export default function Header({ dark, setDark }) {
  const navigate = useNavigate();
  function back() {
    window.scrollTo(0, 0);
    navigate(-1);
  }
  const href = useHref();
  return (
    <HeaderFormat dark={dark}>
      {href !== "/" && <BackButton onClick={back}>{"< Voltar"}</BackButton>}
      <h1>
        <StyledLink to="/">CINEFLEX</StyledLink>
      </h1>
      <DarkMode dark={dark} setDark={setDark}></DarkMode>
    </HeaderFormat>
  );
}

const HeaderFormat = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.dark ? "#0a0a0a" : "#C3CFD9")};
  position: fixed;
  right: 0;
  top: 0;
`;
const BackButton = styled.button`
  background-color: #e8833a;
  border: none;
  border-radius: 3px;
  font-family: "Roboto";
  font-size: 20px;
  color: #ffffff;
  position: absolute;
  left: 15px;
  cursor: pointer;
`;
const StyledLink = styled(Link)`
  font-family: "Roboto";
  font-size: 34px;
  color: #e8833a;
  text-decoration: none;
  position: relative;
`;
