import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProductosAPI } from "../../helpers/queries";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosAPI = await obtenerProductosAPI();
        setProductos(productosAPI);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    obtenerProductos();
  }, [productos]);

  return (
    <Container className="mainContainer">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <div className="table-responsive">
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ItemProducto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Administrador;
