import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Barra from "./components/Barra.jsx";
import Personajes from "./views/Personajes.jsx";
import DetallesPersonaje from "./views/DetallesPersonaje.jsx";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Barra></Barra>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route path="/personajes" element={<Personajes></Personajes>}>
        </Route>
        <Route path="/personajes/:id" element={<DetallesPersonaje></DetallesPersonaje>}>
        </Route>
        <Route path="*" element={<Home></Home>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 