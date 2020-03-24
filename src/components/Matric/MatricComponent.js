import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import matriculable from '../matriculable'
import FichaCurso from "./FichaCurso"
import MatriculaAviso from "./MatriculaAviso"
import Precios from "./Precios"
import Persona from "./Persona"

const MatricComponent = ({idioma,cursoPubli,curso,matricula,persona,preciosColectivos,
        precioElegido,email,emailrepite,nombre,apellido1,apellido2,
        setData}) => {
    const ismatriculable = matriculable( cursoPubli);
    return(
        <Container>
            <Row>
                <Col xs={12} md={10} lg={6} >    
                    <FichaCurso {...cursoPubli} idioma={idioma} />
                </Col>
            </Row>
            { matricula ?
            <Row>
                <Col xs={12} md={10} lg={6} >    
                    <MatriculaAviso {...cursoPubli}  matricula={matricula} persona={persona} idioma={idioma} />
                </Col>
            </Row>
            : null
            }
            { !matricula && ismatriculable ?
            <>
            <Row>
                <Col xs={12} md={10} lg={6} >
                    <Precios {...cursoPubli} idioma={idioma} persona={persona} 
                        preciosColectivos={preciosColectivos} setData={setData} />
                </Col>
            </Row>
            { precioElegido ? 
            <Row>
                <Col xs={12} md={10} lg={6} >
                    <Persona persona={persona} setData={setData} />
                </Col>
            </Row>
            : null }
            </>
                : null
            }
            <br/>
            <br/>
            <hr/>
            <Row>
                <Col xs={12} >
                    precioElegido:<small>{precioElegido}</small>
                    , email:<small>{email}</small>
                    , emailrepite:<small>{emailrepite}</small>
                    , nombre:<small>{nombre}</small>
                    , apellido1:<small>{apellido1}</small>
                    , apellido2:<small>{apellido2}</small>
                    <hr/> matricula:
                    <small>{JSON.stringify( matricula )}</small>
                    <hr/>preciosColectivos:
                    <small>{JSON.stringify( preciosColectivos )}</small>
                    <hr/>cursoPubli:
                    <small>{JSON.stringify( cursoPubli )}</small>
                </Col>
            </Row>
        </Container>
    );
}

MatricComponent.propTypes = {
    cursoPubli: PropTypes.object.isRequired,
    curso: PropTypes.object,
    idioma: PropTypes.string.isRequired,
    matricula: PropTypes.object,
    persona: PropTypes.object,
    preciosColectivos: PropTypes.array,
    setData: PropTypes.func,
}

export default MatricComponent