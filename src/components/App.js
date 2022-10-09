import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import ChooseMovie from "./ChooseMovie/ChooseMovie";
import ChooseSession from "./ChooseSession/ChooseSession";
import ChoseSeats from "./ChooseSeats/ChooseSeats";
import Sucess from "./Sucess";
import { useState } from "react";
import FakeBody from "./FakeBody";

export default function App() {
  const [ticket, setTicket] = useState({});
  const [dark, setDark] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header dark={dark} setDark={setDark} />
      <FakeBody dark={dark} />
      <Routes>
        <Route path="/" element={<ChooseMovie dark={dark} />}></Route>
        <Route
          path="/sessoes/:movieId"
          element={<ChooseSession dark={dark} />}
        ></Route>
        <Route
          path="/assentos/:sessionId"
          element={<ChoseSeats dark={dark} setTicket={setTicket} />}
        ></Route>
        <Route
          path="/sucesso"
          element={<Sucess ticket={ticket} dark={dark} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
