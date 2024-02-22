import { Button, Card, Col } from 'react-bootstrap';
const CardProducto = ({producto}) => {
    return (
        <Col md={4} lg={3} >
        <Card className='m-1'>
          <Card.Img variant="top" src={producto.imagen} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title className='txt-verdecito'>{producto.nombreProducto}</Card.Title>
            <Card.Text>
              {producto.descripcion_breve}<br/>
              <b>Precio: {producto.precio}</b>
            </Card.Text>
            <hr />
            <div className='d-flex justify-content-end'>
                <Button variant="success">Ver mas</Button>  
            </div>
          </Card.Body>
        </Card>
        </Col>
    );
};

export default CardProducto;