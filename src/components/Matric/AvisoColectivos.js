import React, { useState } from "react"
import PropTypes from "prop-types"

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { FaKey, FaTimesCircle } from 'react-icons/fa'

const AvisoColectivos = ({idioma,nc,persona,preciosColectivos}) => {
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
    if ( persona ) { // preciosColectivos && preciosColectivos.length
        const sinResto = preciosColectivos.filter( pre => pre.idPrecio !== 5 )
        return(
            <Alert variant='success' onClose={() => setShow(false)} dismissible >
                <Alert.Heading>Precios exclusivos para UPV</Alert.Heading>
                Esta actividad dispone de {nc} precios exclusivos para colectivos de la Universitat Politècncia de València. 
                <br/>
                Ya está identificado como {persona.nombre} {persona.apellidos}, y cumple para {sinResto.length} de ellos.
            </Alert>
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
            Esta actividad dispone de {nc} precios para personas de colectivos de la Universitat Politècncia de València. 
            <br/>
            Para poder acceder a ellos debe de identificarse en la Intranet de la UPV.
            <hr/>
            <Button href={linkUPV} target='_new' variant="success">
                <FaKey /> Identificación UPV
            </Button>
            &nbsp;&nbsp;&nbsp;  
            <Button onClick={() => setShow(false)} variant="danger">
                <FaTimesCircle /> No soy UPV
            </Button>
        </Alert>
    )
}

AvisoColectivos.propTypes = {
    idioma: PropTypes.string.isRequired,
    nc: PropTypes.number.isRequired,
    persona: PropTypes.object,
    preciosColectivos: PropTypes.array,
}

export default AvisoColectivos