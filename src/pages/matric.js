import React from "react";

import MatricContainer from "../components/Matric/MatricContainer";

import queryString from '../components/util/querystring';

const MatricPage = (page) => {
  const search = page.location.search;
  const qs = search ? queryString( search) : undefined ;
  let idioma = qs ? qs['idioma'] : null;  
  if( !idioma) idioma = 'es';
  let idcurso = qs ? qs['idcurso'] : null;
  const params = { idioma: idioma, idcurso: parseInt( idcurso, 10) };
  return (
    <MatricContainer {...params} />
  );
}

export default MatricPage
