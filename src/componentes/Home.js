import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { listarRestaurantes } from '../restauranteService'

function Home(props) {
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        getRestaurantes();
    }, []);

    const getRestaurantes = async () => {
        try{
            const restaurantesFirebase = await listarRestaurantes();
            setRestaurantes(restaurantesFirebase)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            <Row className="my-3 justify-content-center">
                <Col md={6}>
                {restaurantes.map(restaurante => (
                    <Row key={restaurante.id} className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <Col className="p-4 d-flex flex-column position-static">
                            <Card.Body>
                                <h3 className="my-2">{restaurante.nombre}</h3>
                                <Card.Text>{restaurante.descripcion}</Card.Text>
                                <Card.Text>{restaurante.direccion}</Card.Text>
                            </Card.Body>
                            <Col className="d-none d-lg-block">
                                <Card.Img 
                                    className="card-img-top"
                                    src={restaurante.url}
                                    alt="foto restaurante 1"
                                />
                            </Col>
                        </Col>
                    </Row>
                ))}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;