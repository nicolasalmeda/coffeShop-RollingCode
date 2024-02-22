import { Button } from "react-bootstrap";
import { eliminarProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({producto}) => {

  const eliminarProducto = async (id) => {
    const respuesta = await eliminarProductoAPI(id);
    if(respuesta.status === 200){
      Swal.fire({
        title: "Producto eliminado",
        text: `El producto "${producto.nombreProducto}" fue eliminado correctamente`,
        icon: "success"
      });
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `El producto "${producto.nombreProducto}" no pudo ser eliminado. Intenta esta operación en unos minutos.`,
        icon: "error"
      });
    }
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
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={() => eliminarProducto(producto.id)}></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
