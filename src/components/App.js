import { BrowserRouter, Routes, Route } from "react-router-dom";
import GLobalStyle from "./GlobalStyle";
import Header from "./Header";
import ChooseMovie from "./ChooseMovie";
import ChooseSession from "./ChooseSession";
import ChoseSeats from "./ChooseSeats";
import Sucess from "./Sucess";

export default function App() {
  return(
    <BrowserRouter>
      <GLobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<ChooseMovie/>}></Route>
        <Route path="/sessoes" element={<ChooseSession/>}></Route>
        <Route path="/assentos" element={<ChoseSeats/>}></Route>
        <Route path="/sucesso" element={<Sucess/>}></Route>
      </Routes>
    </BrowserRouter>
  )  
};
