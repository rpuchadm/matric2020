import React from "react"
import PropTypes from "prop-types"

import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

import Euros from "../Euros"
import AvisoColectivos from "./AvisoColectivos"

const Precio = ({colectivo,id,idPrecio,precio,texto}) => {
    const isDisabled = ( !isNaN( idPrecio) && idPrecio !== 5 ) ;
    console.log( id + 'isDisabled:', isDisabled )
    const badgevariant = isDisabled ? 'dark' : 'success' ;
    const listvariant = isDisabled ? 'dark' : 'light' ;
    if( colectivo || idPrecio ) return (
            <ListGroup.Item variant={listvariant} >
                <Form.Check name='precio' value={id} >
                    <Form.Check.Input type='radio' disabled={isDisabled} />
                    <Form.Check.Label>
                        <Badge pill variant={badgevariant} ><Euros valor={precio} /></Badge> {colectivo}
                        { isDisabled ? <small> (No seleccionable)</small> : null }
                    </Form.Check.Label>
                </Form.Check>
            </ListGroup.Item>
    )
    return (
        <ListGroup.Item variant={listvariant} >
            <Form.Check name='precio' value={id} >
                <Form.Check.Input type='radio' disabled={isDisabled} />
                <Form.Check.Label>
                    <Badge pill variant={badgevariant} ><Euros valor={precio} /></Badge> {texto}
                    { isDisabled ? <small> (No seleccionable)</small> : null }
                </Form.Check.Label>
            </Form.Check>
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
        Debe seleccionar el precio más económico de entre los que tenga disponibles:
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
        listadoPrecios = listadoPrecios.sort( (a,b) => a.precio-b.precio)
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