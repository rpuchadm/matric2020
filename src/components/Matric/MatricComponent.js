import React from "react";
import PropTypes from "prop-types";

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

import Euros from "../Euros"
import AvisoColectivos from "./AvisoColectivos"
import FichaCurso from "./FichaCurso"

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

const MatricComponent = ({idioma,curso}) => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={10} lg={6} >    
                    <FichaCurso urlFicha={curso.urlFicha} idioma={idioma} />
                </Col>
                <Col xs={12} md={10} lg={6} >
                    <Precios {...curso} idioma={idioma} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} >
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