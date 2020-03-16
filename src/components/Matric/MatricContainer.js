import React, { useState } from "react";
import PropTypes from "prop-types";

import Layout from "../layout";

const MatricContainer = ({idioma,idcurso}) => {
    return(
        <Layout title="MatricContainer">

        </Layout>
    );
}

Layout.propTypes = {
    idioma: PropTypes.string.isRequired,
    idcurso: PropTypes.number.isRequired,
}

export default MatricContainer