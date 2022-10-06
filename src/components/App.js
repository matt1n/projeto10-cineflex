import { BrowserRouter, Routes, Route } from "react-router-dom";
import GLobalStyle from "./GlobalStyle";
import Header from "./Header";
import ChooseMovie from "./ChooseMovie";
import ChooseSession from "./ChooseSession";
import ChoseSeats from "./ChooseSeats";
import Sucess from "./Sucess";
import { useState } from "react";

export default function App() {
  const [ticket, setTicket] = useState({})
  return(
    <BrowserRouter>
      <GLobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<ChooseMovie/>}></Route>
        <Route path="/sessoes/:movieId" element={<ChooseSession/>}></Route>
        <Route path="/assentos/:sessionId" element={<ChoseSeats setTicket={setTicket}/>}></Route>
        <Route path="/sucesso" element={<Sucess ticket={ticket}/>}></Route>
      </Routes>
    </BrowserRouter>
  )  
};
