const matriculable = ({fechaInicio,fechaIniPreinscripcion,fechaFinPreinscripcion,fechaMatricula,fechaMatriculaFin}) => {
    const fechaHasta = fechaMatriculaFin ? fechaMatriculaFin : fechaInicio;
    const ara = new Date();
    if( fechaHasta < ara )
    return false;
    if( fechaMatricula ) { 
        return true;
    } else if( fechaIniPreinscripcion ) {
        if( fechaFinPreinscripcion && fechaFinPreinscripcion < ara) {
            return false;
        }
    return true;
    }
}

export default matriculable