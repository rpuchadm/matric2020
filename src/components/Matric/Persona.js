import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


const PersonaForm = ({setData}) => {
    return(
        <Form>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, email: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Enter nombre"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, nombre: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="apellido1">
                <Form.Label>Apellido primero</Form.Label>
                <Form.Control type="text" placeholder="Enter apellido1"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, apellido1: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="apellido2">
                <Form.Label>Apellido segundo</Form.Label>
                <Form.Control type="text" placeholder="Enter apellido2"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, apellido2: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}
PersonaForm.propTypes = {
    persona: PropTypes.object,
    setData: PropTypes.func,
}

const Persona = ({persona,setData}) => {
    let cont = null;
    if ( persona ) {
        cont = <div>
            {persona.nombre} {persona.apellidos} {persona.email} 
        </div>
    } else {
        cont = <PersonaForm  setData={setData} />
    }
    return (
        <>
        <br/>
        <Card>
            <Card.Header>Datos personales</Card.Header>
            <Card.Body>{cont}</Card.Body>
        </Card>
        </>
    )
}
Persona.propTypes = {
    persona: PropTypes.object,
    setData: PropTypes.func,
}

export default Persona