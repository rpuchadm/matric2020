import React from "react"
import PropTypes from "prop-types"

import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import Euros from "../Euros"
import AvisoColectivos from "./AvisoColectivos"

const Precio = ({colectivo,precio,texto}) => {
    if( colectivo ) {
        return(
            <ListGroup.Item> <Badge pill variant='warning' ><Euros valor={precio} /></Badge> {colectivo}</ListGroup.Item>
        )
    }
    return(
        <ListGroup.Item> <Badge pill variant='primary' ><Euros valor={precio} /></Badge> {texto}</ListGroup.Item>
    )
}

const ListadoPrecios = ({listadoPrecios}) => {
    return(
        <>
        Debe seleccionar el precio más barato de entre los que tenga disponibles:
        <ListGroup>
            { listadoPrecios.map( (pre,i) => <Precio key={i} {...pre} /> )}
        </ListGroup>
        </>
    )
}

const Precios = ({idioma,listadoPrecios,precioObservaciones}) => {
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
    listadoPrecios: PropTypes.array.isRequired,
    idioma: PropTypes.string.isRequired,
    precioObservaciones: PropTypes.string.isRequired,
}

export default Precios