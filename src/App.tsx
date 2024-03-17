import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Entradas from "./pages/Entradas/Entradas";
import Bebidas from "./pages/Bebidas/Bebidas";
import Sobremesas from "./pages/Sobremesas/Sobremesas";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/sobremesas" element={<Sobremesas />} />
      </Routes>
    </BrowserRouter>
  );
}
