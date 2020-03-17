import React from "react";
import PropTypes from "prop-types";

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

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
        <ListGroup>
            { listadoPrecios.map( (pre,i) => <Precio key={i} {...pre} /> )}
        </ListGroup>
    )
}

const Precios = ({idioma,listadoPrecios,precioObservaciones}) => {
    if( listadoPrecios && listadoPrecios.length > 0 ) {
        const nc = listadoPrecios.filter( pre => pre.colectivo ).length;
        return(
            <>
            { nc ? <AvisoColectivos idioma={idioma} nc={nc} /> : null }
            <ListadoPrecios listadoPrecios={listadoPrecios} />
            </>
        )
    }
    if( precioObservaciones ) {
        return (
            <>
            precioObservaciones: {precioObservaciones}
            <br/>
            </>
        );
    }
    return null;
}

Precios.propTypes = {
    listadoPrecios: PropTypes.array.isRequired,
    idioma: PropTypes.string.isRequired,
    precioObservaciones: PropTypes.string.isRequired,
}

export default Precios