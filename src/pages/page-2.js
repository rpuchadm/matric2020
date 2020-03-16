import React, { useState } from "react";

import Layout from "../components/layout";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SecondPage = () => {

  const [idcurso,setIdcurso] = useState(62679);
  const [idioma,setIdioma] = useState("es");

  const link = `https://informes.cfp.upv.es/cfp-ws/rest/curso/ficha/${idcurso}/${idioma}`;

  return (
    <Layout title="Page two">
      <Container>
        <Form>
          <Row>
            <Col xs={12} md={4}>
              <Form.Group controlId="idioma" onChange={ (ev) => { setIdioma( ev.target.value); }}>
                <Form.Label>idioma</Form.Label>
                <Form.Check type='radio' name='idioma' value='es' label='es' />
                <Form.Check type='radio' name='idioma' value='ca' label='ca' />
                <Form.Check type='radio' name='idioma' value='en' label='en' />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group controlId="idCurso">
                <Form.Label>id del curso</Form.Label>
                <Form.Control type="text" placeholder="id del curso" 
                  value={idcurso} 
                  onChange={ (ev) => { const newval = Number( ev.target.value); if( !isNaN(newval)) { setIdcurso( newval); } }} 
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Button href={link} target='_blank'>Link idcurso={idcurso} idioma={idioma}</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <br/>
      <br/>
      <Button href="/">Go back to the homepage</Button>
    </Layout>
  );
}

export default SecondPage
