import React, { useState } from "react";
import PropTypes from "prop-types";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AvisoColectivos = ({idioma,nc}) => {
    const [show, setShow] = useState(true);
    if( !show) {
        return(
            <div className="d-flex justify-content-end">
                <Button variant="outline-success" size="sm" 
                    onClick={() => setShow(true)}>
                        Sí soy UPV
                </Button>
                <br/><br/>
            </div>
        )
    }
    let idi;
    switch ( idioma ) {
        case "es" : idi = 'c'; break;
        case "ca" : idi = 'v'; break;
        case "en" : idi = 'e'; break; // no se si esta opción existe o es "e"
        default: idi = 'c';
    }
    const linkUPV = `https://intranet.upv.es/pls/soalu/est_intranet.NI_Dual?P_CUA=cfp&P_IDIOMA=${idi}`;
    return(
        <Alert variant='warning' onClose={() => setShow(false)} dismissible >
            <Alert.Heading>Precios exclusivos para UPV</Alert.Heading>
            Esta actividad dispone de {nc} precios para personas de determinados colectivos de la Universitat Politècncia de València. 
            <br/>
            Para poder acceder a ellos debe de identificarse en la Intranet de la UPV.
            <hr/>
            <Button href={linkUPV} variant="success">
                Identificación UPV
            </Button>
            &nbsp;&nbsp;&nbsp;  
            <Button onClick={() => setShow(false)} variant="danger">
                No soy UPV
            </Button>
        </Alert>
    )
}

AvisoColectivos.propTypes = {
    idioma: PropTypes.string.isRequired,
    nc: PropTypes.number.isRequired,
}

export default AvisoColectivos