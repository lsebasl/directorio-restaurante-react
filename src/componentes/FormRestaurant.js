import React, { useState } from "react";
import {Container, Form, Button } from 'react-bootstrap';
import { crearRestaurante } from '../restauranteService';

function FormRestaurant() {
    const [restaurante, setRestaurante] = useState({});

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRestaurante(values => ({...values, [name]: value}))
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
       
        try{
            crearRestaurante(restaurante)
            setRestaurante([])
        } catch(e){
            console.log(e)
        }
    };

    return (
        <Container>
            <h2 className="my-4">Nuevo Restaurante</h2>
            <Form onSubmit={(e) => handleOnSubmit(e)}>
                <Form.Group className="mb-2">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="nombre" value={ restaurante.nombre || ''} onChange={(e) => {handleOnChange(e)}}  />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" placeholder="Description" name="descripcion" value={restaurante.descripcion || ''} onChange={ (e) => {handleOnChange(e)}} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="direccion" value={restaurante.direccion || ''} onChange={ (e) => {handleOnChange(e)}} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Imagen Url</Form.Label>
                    <Form.Control type="text" placeholder="image url" name="url" value={restaurante.url || ''} onChange={ (e) => {handleOnChange(e)}} />
                </Form.Group>
                <Button className="mt-2" type="submit">Guardar</Button>
            </Form>
        </Container>
    );

    
}

export default FormRestaurant;