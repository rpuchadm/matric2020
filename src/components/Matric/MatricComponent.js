import React from "react"
import PropTypes from "prop-types"

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import matriculable from '../matriculable'
import FichaCurso from "./FichaCurso"
import Precios from "./Precios"

const MatricComponent = ({idioma,curso}) => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={10} lg={6} >    
                    <FichaCurso{...curso} idioma={idioma} />
                </Col>
            </Row>
            { matriculable({curso}) ?
            <Row>
                <Col xs={12} md={10} lg={6} >
                    <Precios {...curso} idioma={idioma} />
                </Col>
            </Row>
                : null}
          
            <Row>
                <Col xs={12} >
                    <hr/>
                    {JSON.stringify( curso )}
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