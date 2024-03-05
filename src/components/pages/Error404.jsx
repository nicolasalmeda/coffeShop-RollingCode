import error from "../../assets/error404.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {


  return (
    <div className="myMain text text-center p-1">
        <div>
            <img src={error} alt="Imagen del error 404" className="img-fluid" />
        </div>
    <Link to="/">
        <Button className="m-1" variant="success">Volver a Inicio</Button>
    </Link>
    </div>
  );
};

export default Error404;