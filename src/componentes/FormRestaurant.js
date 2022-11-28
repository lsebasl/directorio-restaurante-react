import React from "react";
import {Container, Form, Button } from 'react-bootstrap';

function FormRestaurant() {
    return (
        <Container>
            <h2 className="my-4">Nuevo Restaurante</h2>
            <Form>
                <Form.Group className="mb-2">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea"  placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Imagen Url</Form.Label>
                    <Form.Control type="text" placeholder="image url" />
                </Form.Group>
                <Button className="mt-2">Guardar</Button>
            </Form>
        </Container>
    );

    
}

export default FormRestaurant;