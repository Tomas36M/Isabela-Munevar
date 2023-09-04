import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { UseAppContext } from '../context/DBContext'


const MyForm = () => {

    const { addDocument } = UseAppContext();

    const [values, setValues] = useState({
        title: '',
        description: '',
        link: '',
        category: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        addDocument(values)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
        console.log(name, value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre del documento</Form.Label>
                    <Form.Control name='title' onChange={handleInputChange} type="text" placeholder="Escribe el nombre aqui" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control name='category' onChange={handleInputChange} type="text" placeholder="Escribe la categoria aqui" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Link</Form.Label>
                    <Form.Control name='link' onChange={handleInputChange} type="text" placeholder="Escribe el enlace/link aqui" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripcion del producto</Form.Label>
                    <Form.Control name='description' onChange={handleInputChange} as="textarea" rows={5} placeholder="Escribe la descripcion aqui!" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleSubmit.ControlSubmit">
                    <Button type='submit' variant="outline-secondary">Agragar</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default MyForm