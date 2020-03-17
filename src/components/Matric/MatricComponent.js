import React from "react";
import PropTypes from "prop-types";

import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

import Euros from "../Euros"

const Precio = ({colectivo,precio,texto}) => {
    if( colectivo ) {
        return(
            <ListGroup.Item> <Badge pill variant='primary' ><Euros valor={precio} /></Badge> COL {colectivo}</ListGroup.Item>
        )
    }
    return(
        <ListGroup.Item> <Badge pill variant='secondary' ><Euros valor={precio} /></Badge> {texto}</ListGroup.Item>
    )
}

const ListadoPrecios = ({listadoPrecios}) => {
    return(
        <ListGroup>
            { listadoPrecios.map( (pre,i) => <Precio key={i} {...pre} /> )}
        </ListGroup>
    )
}

const AvisoColectivos = ({nc}) => {
    return(
        <Alert variant='warning'>
            {nc} precios exclusivos para colectivos UPV
        </Alert>
    )
}

const Precios = ({listadoPrecios,precioObservaciones}) => {
    if( listadoPrecios && listadoPrecios.length > 0 ) {
        const nc = listadoPrecios.filter( pre => pre.colectivo ).length;
        return(
            <>
            { nc ? <AvisoColectivos nc={nc} /> : null }
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
                <Col xs={12} md={4} >
                    {curso.acronimo}
                    <br/>
                    <Precios {...curso} />
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