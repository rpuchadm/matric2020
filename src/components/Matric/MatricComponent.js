import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import matriculable from '../matriculable'
import FichaCurso from "./FichaCurso"
import Precios from "./Precios"

const MatricComponent = ({idioma,curso,preciosColectivos}) => {
    const ismatriculable = matriculable( curso);
    return(
        <Container>
            <Row>
                <Col xs={12} md={10} lg={6} >    
                    <FichaCurso{...curso} idioma={idioma} />
                </Col>
            </Row>
            { ismatriculable ?
            <Row>
                <Col xs={12} md={10} lg={6} >
                    <Precios {...curso} idioma={idioma} />
                </Col>
            </Row>
                : null
            }
            <Row>
                <Col xs={12} >
                    <hr/>
                    <small>{JSON.stringify( curso )}</small>
                    <hr/>
                    <small>{JSON.stringify( preciosColectivos )}</small>
                </Col>
            </Row>
        </Container>
    );
}

MatricComponent.propTypes = {
    curso: PropTypes.object.isRequired,
    idioma: PropTypes.string.isRequired,
}

export default MatricComponent