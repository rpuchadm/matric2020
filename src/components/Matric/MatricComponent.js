import React from "react";
import PropTypes from "prop-types";


const MatricComponent = ({idioma,curso}) => {
    return(
        <div>
            {curso.acronimo}
            <br/>
            <strong>{curso.denominacion}</strong>
            <br/>
            {curso.precioObservaciones}
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