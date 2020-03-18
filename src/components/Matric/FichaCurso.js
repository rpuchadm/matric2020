import React from "react"
import PropTypes from "prop-types"
import moment from "moment"

import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FaPlusCircle } from 'react-icons/fa'

// a imagen y semejanza de ../matriculable.js
const Estado = ({fechaInicio,fechaIniPreinscripcion,fechaFinPreinscripcion,fechaMatricula,fechaMatriculaFin,idioma}) => {
    const fechaHasta = fechaMatriculaFin ? fechaMatriculaFin : fechaInicio;
    const ara = new Date();
    if( fechaHasta < ara )
        return (
            <><br/><Badge variant="danger">Matricula finalizada desde {moment(fechaHasta).format('DD/MM/YYYY')}</Badge></>
        )
    if( fechaMatricula ) { 
        return (
            <><br/><Badge variant="success">Matriculable desde {moment(fechaMatricula).format('DD/MM/YYYY')}</Badge></>
        )    
    } else if( fechaIniPreinscripcion ) {
        if( fechaFinPreinscripcion && fechaFinPreinscripcion < ara) {
            return (
                <><br/><Badge variant="danger">Preinscripción finalizada desde {moment(fechaFinPreinscripcion).format('DD/MM/YYYY')}</Badge></>
            )      
        }
        return (
            <><br/><Badge variant="success">En preinscripción desde {moment(fechaIniPreinscripcion).format('DD/MM/YYYY')}</Badge></>
        )
    }
}

const FichaCurso = ({fechaAnulado,idioma,urlFicha,...otherprops}) => {
    if( fechaAnulado) return(
        <Alert variant='danger' >
            <Alert.Heading>Importante: actividad anulada</Alert.Heading>
            Esta actividad está anulada desde {moment(fechaAnulado).format('DD/MM/YYYY')}.
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
            <Estado {...otherprops} idioma={idioma} />
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