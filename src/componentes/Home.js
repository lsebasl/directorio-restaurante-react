import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home(props) {
    return (
        <Container>
            <Row className="my-3 justify-content-center">
                <Col md={6}>
                {props.restaurants.map(restaurante => (
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
        </Container>
    );
}

export default Home;