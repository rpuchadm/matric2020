import React from "react"
import PropTypes from "prop-types"

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


const PersonaForm = ({email,emailrepite,nombre,apellido1,apellido2,setData}) => {
    return(
        <Form>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter email"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, email: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="emailrepite">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={emailrepite} placeholder="Enter email"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, emailrepite: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} placeholder="Enter nombre"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, nombre: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="apellido1">
                <Form.Label>Apellido primero</Form.Label>
                <Form.Control type="text" value={apellido1} placeholder="Enter apellido1"
                    onChange={ (ev) => { const value = ev.target.value; setData( prev => ({ ...prev, apellido1: value })); }}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="apellido2">
                <Form.Label>Apellido segundo</Form.Label>
                <Form.Control type="text" value={apellido2} placeholder="Enter apellido2"
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
    email: PropTypes.string,
    emailrepite: PropTypes.string,
    nombre: PropTypes.string,
    apellido1: PropTypes.string,
    apellido2: PropTypes.string,
    setData: PropTypes.func,
}

const Persona = ({persona,...otherprops}) => {
    let cont = null;
    if ( persona ) {
        cont = <div>
            {persona.nombre} {persona.apellidos} {persona.email} 
        </div>
    } else {
        cont = <PersonaForm  {...otherprops} />
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
}

export default Persona