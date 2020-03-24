import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import MatricComponent from "./MatricComponent"
import Error from "../Error"
import Layout from "../layout"
import LoadingImage from "../LoadingImage"

const MatricContainer = ({idioma,idcurso}) => {

    const [data,setData] = useState({});
    useEffect( () => {
        const fetchPrecioColectivos = () => {
            const link = `/cfp-ws/rest/matricula/intento/${idcurso}`;
            setData({loading: true, link: link});
            fetch( link)
            .then( res => res.json())
            .then( res => setData( (prev) => { return ({...prev, ...res, loading: false })}))
            .catch( (err) => { console.log("err:", err); setData({ error: true, url: link }) } )        
        }
        fetchPrecioColectivos();
        if( idcurso && idioma ) {
            const link = `/cfp-ws/rest/curso/ficha/${idcurso}/${idioma}`;
            setData({loading: true, link: link});
            fetch( link)
            .then( res => res.json())
            .then( res => setData( (prev) => { return ({ ...prev, cursoPubli: res, loading: false })}))
            .catch( (err) => { console.log("err:", err); setData({ error: true, url: link }) } )
        }
    },[idcurso,idioma]);
    if( data.error ) return( <Error error={data.error} url={data.url} /> );
    if( data.loading ) { return( <LoadingImage/> ); }
    if( data.cursoPubli ) {
        const title = data.cursoPubli.denominacion;
        return(
            <Layout title={title}>
                <MatricComponent {...data} idioma={idioma} setData={setData} />
            </Layout>
        );
    }
    return null;
}

MatricContainer.propTypes = {
    idioma: PropTypes.string.isRequired,
    idcurso: PropTypes.number.isRequired,
}

export default MatricContainer