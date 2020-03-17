import React from "react";
import PropTypes from "prop-types";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FaPlusCircle } from 'react-icons/fa';

const FichaCurso = ({idioma,urlFicha}) => {
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
    idioma: PropTypes.string.isRequired,
    urlFicha: PropTypes.string.isRequired,
}

export default FichaCurso