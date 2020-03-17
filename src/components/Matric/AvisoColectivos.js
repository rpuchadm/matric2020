import React from "react";
import PropTypes from "prop-types";

import Alert from 'react-bootstrap/Alert';

const AvisoColectivos = ({nc}) => {
    return(
        <Alert variant='warning'>
            <Alert.Heading>Precios exclusivos para UPV</Alert.Heading>
            Esta actividad dispone de {nc} precios para personas de determinados colectivos de la Universitat Politècncia de València. 
            <br/>
            Para poder acceder a ellos debe de identificarse en la Intranet de la UPV.

        </Alert>
    )
}

AvisoColectivos.propTypes = {
    nc: PropTypes.number.isRequired,
}

export default AvisoColectivos