import React from "react"
import PropTypes from "prop-types"

import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

import Euros from "../Euros"
import AvisoColectivos from "./AvisoColectivos"

const Precio = ({colectivo,id,idPrecio,precio,texto,preciosColectivos,setData}) => {
    const upvexcl = ( !isNaN( idPrecio) && idPrecio !== 5 ) ;
    const isDisabled = ( upvexcl && preciosColectivos.length === 0 ) ;
    const badgevariant = isDisabled ? 'dark' : ( upvexcl ? 'success' : 'primary' ) ;
    const listvariant = isDisabled ? 'dark' : 'light' ;
    if( colectivo || idPrecio ) return (
            <ListGroup.Item variant={listvariant} >
                <Form.Check value={id} >
                    <Form.Check.Input type='radio' name='precio' disabled={isDisabled} 
                        onChange={(ev) => setData( (prev) => ({...prev, precioElegido: id})) }
                        />
                    <Form.Check.Label>
                        <Badge pill variant={badgevariant} ><Euros valor={precio} /></Badge> {colectivo}
                        { isDisabled ? <small> (No seleccionable)</small> : null }
                    </Form.Check.Label>
                </Form.Check>
            </ListGroup.Item>
    )
    return (
        <ListGroup.Item variant={listvariant} >
            <Form.Check  value={id} >
                <Form.Check.Input type='radio' name='precio' disabled={isDisabled}
                    onChange={(ev) => setData( (prev) => ({...prev, precioElegido: id})) } 
                    />
                <Form.Check.Label>
                    <Badge pill variant={badgevariant} ><Euros valor={precio} /></Badge> {texto}
                    { isDisabled ? <small> (No seleccionable)</small> : null }
                </Form.Check.Label>
            </Form.Check>
        </ListGroup.Item>
    )
}
Precio.propTypes = {
    colectivo: PropTypes.string,
    id: PropTypes.number.isRequired,
    idPrecio: PropTypes.number,
    precio: PropTypes.number.isRequired,
    idioma: PropTypes.string.isRequired,
    texto: PropTypes.string,
    preciosColectivos: PropTypes.array,
}

const ListadoPrecios = ({listadoPrecios,idioma,preciosColectivos,setData}) => {
    return(
        <Form>
        <span className='lead'>Debe seleccionar el precio más económico de entre los que tenga disponibles:</span>
        <ListGroup>
            { listadoPrecios.map( (pre) => <Precio key={pre.id} {...pre} idioma={idioma} 
                    preciosColectivos={ ( preciosColectivos && preciosColectivos.length ) ? 
                        preciosColectivos.filter( precol => precol.id === pre.id )
                        : null} 
                    setData={setData}
                /> )}
        </ListGroup>
        </Form>
    )
}

const Precios = ({fechaAnulado,idioma,listadoPrecios,precioObservaciones,...otherprops}) => {
    if( fechaAnulado) return null;
    let cont = null;
    if( listadoPrecios && listadoPrecios.length > 0 ) {
        const nc = listadoPrecios.filter( pre => pre.idPrecio && pre.idPrecio !== 5 ).length;
        listadoPrecios = listadoPrecios.sort( (a,b) => a.precio-b.precio)
        cont =
            <>
            { nc ? <AvisoColectivos idioma={idioma} nc={nc} {...otherprops} /> : null }
            <ListadoPrecios listadoPrecios={listadoPrecios} idioma={idioma} {...otherprops} />
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
    preciosColectivos: PropTypes.array,
    setData: PropTypes.func,
}

export default Precios