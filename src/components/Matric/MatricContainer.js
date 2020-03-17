import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Error from "../Error";
import Layout from "../layout";
import LoadingImage from "../LoadingImage";

const MatricContainer = ({idioma,idcurso}) => {

    const [data,setData] = useState({});

    useEffect( () => {
        if( idcurso && idioma ) {
            console.log("useEffect CON fetch idcurso:", idcurso, " idioma:", idioma);
            const link = `/cfp-ws/rest/curso/fich-a/${idcurso}/${idioma}`;
            setData({loading: true, link: link});
            fetch( link)
            .then( res => res.json())
            .then( res => setData({ curso: res, loading: false }))
            .catch( (err) => { console.log("err:", err); setData({ error: true, url: link }) } )
        } else {
            console.log("useEffect sin fetch idcurso:", idcurso, " idioma:", idioma);
        }
    },[idcurso,idioma]);
    if( data.error ) return( <Error error={data.error} url={data.url} /> );
    if( data.loading ) { return( <LoadingImage/> ); }
    if( data.curso ) {
        return(
            <Layout title="MatricContainer">
                <div>
                    idcurso:{idcurso}, idioma:{idioma}
                    <br/>
                    {data.curso.acronimo}
                    <br/>
                    <strong>{data.curso.denominacion}</strong>
                    <hr/>
                    {JSON.stringify( data.curso )}
                </div>
            </Layout>
        );
    }
    return null;
}

Layout.propTypes = {
    idioma: PropTypes.string.isRequired,
    idcurso: PropTypes.number.isRequired,
}

export default MatricContainer