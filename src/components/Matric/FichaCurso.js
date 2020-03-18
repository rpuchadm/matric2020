import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FaPlusCircle } from 'react-icons/fa';

const FichaCurso = ({fechaAnulado,idioma,urlFicha}) => {
    if( fechaAnulado) return(
        <Alert variant='danger' >
            <Alert.Heading>Importante: actividad anulada</Alert.Heading>
            Esta actividad está anulada desde {moment(fechaAnulado).format('DD/MM/YYY')}
            <hr/>
            <Button href={urlFicha} target='_new' variant="danger">
                <FaPlusCircle /> Ver información
            </Button>
        </Alert>        
    )
    return(
        <Alert variant='secondary' >
            <Alert.Heading>Información detallada</Alert.Heading>
            Antes de iniciar el proceso de inscripción 
            debe conocer toda la información importante sobre esta actividad.
            <hr/>
            <Button href={urlFicha} target='_new' variant="warning">
                <FaPlusCircle /> Ver información
            </Button>
        </Alert>
    )
}

FichaCurso.propTypes = {
    fechaAnulado: PropTypes.number,
    idioma: PropTypes.string.isRequired,
    urlFicha: PropTypes.string.isRequired,
}

export default FichaCurso