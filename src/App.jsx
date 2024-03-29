import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import Login from "./components/pages/Login";

function App() {
  return (
    //administrador de rutas
    // www.rollingCoffee.com/
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/detalleProducto" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/crear" element={<FormularioProducto editar={false} titulo={"Crear nuevo prodcuto"}></FormularioProducto>}></Route>
        <Route exact path="/administrador/editar/:id" element={<FormularioProducto editar={true} titulo={"Editar prodcuto"}></FormularioProducto>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        {/* // <Route exact path="/administrador/editar" element={<Administrador></Administrador>}></Route>  */}
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
