import { Button } from "react-bootstrap";
import { eliminarProductoAPI, obtenerProductosAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemProducto = ({producto,setProductos}) => {

  const eliminarProducto = async (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No puedes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarProductoAPI(id);
        Swal.fire({
          title: "Borrado!",
          text: "Su producto ha sido eliminado.",
          icon: "success"
        });
        const repuestaProductos = await obtenerProductosAPI();
          const productosRestantes = await repuestaProductos;
          setProductos(productosRestantes);
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto "${producto.nombreProducto}" no pudo ser eliminado. Intenta esta operación en unos minutos.`,
            icon: "error"
          });
        }
    });
  
  }



  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link to={`/administrador/editar/${producto.id}`}>
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={() => eliminarProducto(producto.id)}></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
