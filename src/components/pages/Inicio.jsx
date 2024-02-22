import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect,useState } from "react";
import {obtenerProductosAPI} from "../../helpers/queries";


const Inicio = () => {

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
  }, []);

  console.log(productos);
  return (
    <>
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mainContainer">
      <section>
        <h2 className="display-3">Nuestros productos</h2>
        <hr />
        <Row className="justify-content-around">
          {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </Row>
      </section>
    </Container>
    </>
    
  );
};

export default Inicio;