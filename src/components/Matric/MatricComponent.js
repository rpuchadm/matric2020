import React from "react";
import PropTypes from "prop-types";

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Euros from "../Euros"

const Precio = ({colectivo,precio,texto}) => {
    if( colectivo ) {
        return(
            <li>  COL {colectivo}</li>
        );
    }
    return(
    <li>{texto}</li>
    );
}

const ListadoPrecios = ({listadoPrecios}) => {
    return(
        <ul>
            { listadoPrecios.map( (pre,i) => <li key={i}>{pre.colectivo}, {pre.texto}</li> )}
        </ul>
    );
}

const Precios = ({listadoPrecios,precioObservaciones}) => {
    if( listadoPrecios && listadoPrecios.length > 0 ) {
        return(
            <ListadoPrecios listadoPrecios={listadoPrecios} />
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

const MatricComponent = ({idioma,curso}) => {
    return(
        <Container>
            <Row>
                <Col>
                    {curso.acronimo}
                    <br/>
                    <Precios {...curso} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                    {JSON.stringify( curso )}
                </Col>
            </Row>
        </Container>
    );
}

MatricComponent.propTypes = {
    curso: PropTypes.object.isRequired,
    idioma: PropTypes.string.isRequired,
    //idcurso: PropTypes.number.isRequired,
}

export default MatricComponent