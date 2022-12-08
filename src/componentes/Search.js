import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { listarRestaurantes } from '../restauranteService'
function Search() {
    const [input, setInput] = useState('');
    const [restaurantes, setRestaurantes] = useState([]);

    const getName = e => {
        getRestaurantes();
        setInput(e.target.value)
    }
    const searchRestaurant = e => {
        e.preventDefault();

        const restauranteList = restaurantes.filter((el) =>
            el.nombre.toLowerCase().includes(input.toLowerCase())
        );
        setRestaurantes(restauranteList)
        setInput('')
    }

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
        <>
        <div className="px-3 py-2 border-bottom mb-4">
            <Container className="d-flex flex-wrap justify-content-center"> 
                <Form className="row g-1" onSubmit={searchRestaurant}>
                    <Form.Group className="mb-">
                    <Form.Control type="text" placeholder="Escribir nombre" onChange={getName} />
                    </Form.Group>
                    <Button type="submit">Buscar</Button>
                </Form>
            </Container>
        </div>
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
        </>
    );
}

export default Search;