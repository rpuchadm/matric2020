import React from "react"
import PropTypes from "prop-types"

import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

import Euros from "../Euros"
import AvisoColectivos from "./AvisoColectivos"

const Precio = ({colectivo,id,idPrecio,precio,texto}) => {
    //const seleccionable = ( idPrecio == 5 || !idPrecio )
    if( colectivo || idPrecio ) return (
            <ListGroup.Item>
                <Form.Check type='radio' name='precio' value={id} />
                <Badge pill variant='warning' ><Euros valor={precio} /></Badge> {colectivo}
            </ListGroup.Item>
    )
    return (
        <ListGroup.Item>
            <Form.Check type='radio' name='precio' value={id} />
            <Badge pill variant='primary' ><Euros valor={precio} /></Badge> {texto}
        </ListGroup.Item>
    )
}
Precio.propTypes = {
    colectivo: PropTypes.number,
    id: PropTypes.number.isRequired,
    idPrecio: PropTypes.number,
    precio: PropTypes.number.isRequired,
    idioma: PropTypes.string.isRequired,
    texto: PropTypes.string,
}

const ListadoPrecios = ({listadoPrecios}) => {
    return(
        <Form>
        Debe seleccionar el precio más barato de entre los que tenga disponibles:
        <ListGroup>
            { listadoPrecios.map( (pre) => <Precio key={pre.id} {...pre} /> )}
        </ListGroup>
        </Form>
    )
}

const Precios = ({fechaAnulado,idioma,listadoPrecios,precioObservaciones}) => {
    if( fechaAnulado) return null;
    let cont = null;
    if( listadoPrecios && listadoPrecios.length > 0 ) {
        const nc = listadoPrecios.filter( pre => pre.colectivo ).length;
        cont =
            <>
            { nc ? <AvisoColectivos idioma={idioma} nc={nc} /> : null }
            <ListadoPrecios listadoPrecios={listadoPrecios} />
            </>
    } else if( precioObservaciones ) {
          cont =
            <>
            precioObservaciones: {precioObservaciones}
            <br/>
            </>
    }
    return (
        <Card>
            <Card.Header>Precio</Card.Header>
            <Card.Body>{cont}</Card.Body>
        </Card>
    )
}

Precios.propTypes = {
    fechaAnulado: PropTypes.number,
    listadoPrecios: PropTypes.array.isRequired,
    idioma: PropTypes.string.isRequired,
    precioObservaciones: PropTypes.string.isRequired,
}

export default Precios