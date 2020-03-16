import React, { useState } from "react";

import Layout from "../components/layout";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SecondPage = () => {

  const [idcurso,setIdcurso] = useState(62679);
  const [idioma,setIdioma] = useState("es");

  const link = `https://informes.cfp.upv.es/cfp-ws/rest/curso/ficha/${idcurso}/${idioma}`;

  return (
    <Layout title="Page two">

      <Form>
        <Form.Group controlId="idCurso">
          <Form.Label>id del curso</Form.Label>
          <Form.Control type="text" placeholder="id del curso" 
            value={idcurso} 
            onChange={ (ev) => { const newval = Number( ev.target.value); if( !isNaN(newval)) { setIdcurso( newval); } }} 
          />
        </Form.Group>

        <Form.Group controlId="idioma" onChange={ (ev) => { setIdioma( ev.target.value); }}>
          <Form.Label>idioma</Form.Label>
          <Form.Check type='radio' name='idioma' value='es' label='es' />
          <Form.Check type='radio' name='idioma' value='ca' label='ca' />
          <Form.Check type='radio' name='idioma' value='en' label='en' />
        </Form.Group>

        <Button href={link} target='_blank'>Link idcurso={idcurso} idioma={idioma}</Button>        

      </Form>


      <Button href="/">Go back to the homepage</Button>
    </Layout>
  );
}

export default SecondPage
