import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pagina/Home";
import SobreMim from "./Pagina/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Pagina/Post";
import NaoEncontrada from "Pagina/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
        <Route index element={<Home />} />
          <Route index path="inicio" element={<Home />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
