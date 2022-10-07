import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import ChooseMovie from "./ChooseMovie";
import ChooseSession from "./ChooseSession";
import ChoseSeats from "./ChooseSeats";
import Sucess from "./Sucess";
import { useState } from "react";

export default function App() {
  const [ticket, setTicket] = useState({})
  const [dark, setDark] = useState(false)
  // #333333
  // #0a0a0a
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<ChooseMovie dark={dark}/>}></Route>
        <Route path="/sessoes/:movieId" element={<ChooseSession dark={dark}/>}></Route>
        <Route path="/assentos/:sessionId" element={<ChoseSeats dark={dark} setTicket={setTicket}/>}></Route>
        <Route path="/sucesso" element={<Sucess ticket={ticket} dark={dark} />}></Route>
      </Routes>
    </BrowserRouter>
  )  
};
