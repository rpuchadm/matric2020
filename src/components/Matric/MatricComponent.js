import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import matriculable from '../matriculable'
import FichaCurso from "./FichaCurso"
import Precios from "./Precios"

const MatricComponent = ({idioma,curso,persona,preciosColectivos,precioElegido,setData}) => {
    const ismatriculable = matriculable( curso);
    return(
        <Container>
            <Row>
                <Col xs={12} md={10} lg={6} >    
                    <FichaCurso {...curso} idioma={idioma} />
                </Col>
            </Row>
            { ismatriculable ?
            <Row>
                <Col xs={12} md={10} lg={6} >
                    <Precios {...curso} idioma={idioma} persona={persona} 
                        preciosColectivos={preciosColectivos} setData={setData} />
                </Col>
            </Row>
                : null
            }
            <Row>
                <Col xs={12} >
                    precioElegido:
                    <small>{JSON.stringify( precioElegido )}</small>
                    <hr/> persona:
                    <small>{JSON.stringify( persona )}</small>
                    <hr/>preciosColectivos:
                    <small>{JSON.stringify( preciosColectivos )}</small>
                    <hr/>curso:
                    <small>{JSON.stringify( curso )}</small>
                </Col>
            </Row>
        </Container>
    );
}

MatricComponent.propTypes = {
    curso: PropTypes.object.isRequired,
    idioma: PropTypes.string.isRequired,
    persona: PropTypes.object,
    preciosColectivos: PropTypes.array,
    setData: PropTypes.func,
}

export default MatricComponent