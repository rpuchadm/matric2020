import React from "react";
import PropTypes from "prop-types";


const Precios = ({listadoPrecios,precioObservaciones}) => {
    if( listadoPrecios && listadoPrecios.length > 0 ) {
        return(
            <>
            listadoPrecios: { JSON.stringify( listadoPrecios)}
            </>
        )
    }
    if( precioObservaciones )
        return (
            <>
            precioObservaciones: {precioObservaciones}
            <br/>
            </>
        );
}

const MatricComponent = ({idioma,curso}) => {
    return(
        <div>
            {curso.acronimo}
            <br/>
            <Precios {...curso} />
            <br/>
            {JSON.stringify(curso.listadoPrecios)}
            <hr/>
            {JSON.stringify( curso )}
        </div>
    );
}

MatricComponent.propTypes = {
    curso: PropTypes.object.isRequired,
    idioma: PropTypes.string.isRequired,
    //idcurso: PropTypes.number.isRequired,
}

export default MatricComponent