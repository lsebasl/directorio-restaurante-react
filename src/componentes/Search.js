import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'

function Search(props) {
    const [input, setInput] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const getName = e => {
        setInput(e.target.value)
    }
    const searchRestaurant = e => {
        e.preventDefault();

        const restaurantList = props.restaurants.filter((el) =>
            el.name.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        setRestaurants(restaurantList)
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
                    {restaurants.map(restaurante => (
                        <Row key={restaurante.id} className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <Col className="p-4 d-flex flex-column position-static">
                                <Card.Body>
                                    <h3 className="my-2">{restaurante.name}</h3>
                                    <Card.Text>{restaurante.description}</Card.Text>
                                    <Card.Text>{restaurante.address}</Card.Text>
                                </Card.Body>
                                <Col className="d-none d-lg-block">
                                    <Card.Img 
                                        className="card-img-top"
                                        src={restaurante.image}
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