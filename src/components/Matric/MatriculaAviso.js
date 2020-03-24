import React from "react"
import PropTypes from "prop-types"

//import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'

const MatriculaAviso = ({idioma,cursoPubli,curso,matricula,persona}) => {
    let sestado = null ; let variant = 'default' ;
    if ( matricula.estado === 'P' ) { sestado =  'martícula aceptada'; }
    else if ( matricula.estado === 'P' ) { sestado =  'preinscripción'; }
    else if ( matricula.estado === 'N' ) { sestado =  'martícula anulada'; }
    else if ( matricula.estado === 'R' ) { sestado =  'martícula rechazada'; }

    return (
        <>
        <br/>
        <span className='lead'>
            Ya tiene una <strong>{sestado}</strong> en esta actividad.
        </span>
        <Card variant={variant}>
            <Card.Header>Matrícula</Card.Header>
            <Card.Body>
                {JSON.stringify( matricula)}
            </Card.Body>
        </Card>
        <br/>
        Si intenta inscribir a otra persona deberá <strong>BLA BLA BLA</strong>...
        </>
    )
}

MatriculaAviso.propTypes = {
    cursoPubli: PropTypes.object.isRequired,
    curso: PropTypes.object,
    idioma: PropTypes.string.isRequired,
    matricula: PropTypes.object,
    persona: PropTypes.object,
}

export default MatriculaAviso