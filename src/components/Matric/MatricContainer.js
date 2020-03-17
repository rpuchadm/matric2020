import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import MatricComponent from "./MatricComponent"
import Error from "../Error"
import Layout from "../layout"
import LoadingImage from "../LoadingImage"

const MatricContainer = ({idioma,idcurso}) => {

    const [data,setData] = useState({});

    useEffect( () => {
        if( idcurso && idioma ) {
            const link = `/cfp-ws/rest/curso/ficha/${idcurso}/${idioma}`;
            setData({loading: true, link: link});
            fetch( link)
            .then( res => res.json())
            .then( res => setData({ curso: res, loading: false }))
            .catch( (err) => { console.log("err:", err); setData({ error: true, url: link }) } )
        }
    },[idcurso,idioma]);
    if( data.error ) return( <Error error={data.error} url={data.url} /> );
    if( data.loading ) { return( <LoadingImage/> ); }
    if( data.curso ) {
        const title = data.curso.denominacion;
        return(
            <Layout title={title}>
                <MatricComponent {...data} idioma={idioma} />
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