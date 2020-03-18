export default function matriculable({fechaInicio,fechaIniPreinscripcion,fechaFinPreinscripcion,fechaMatricula,fechaMatriculaFin}) {
    if ( ! fechaInicio ) return false;
    const fechaHasta = fechaMatriculaFin ? fechaMatriculaFin : fechaInicio;
    const ara = new Date();
    //console.log('matriculable: fechaHasta')
    if( fechaHasta < ara ){
        //console.log('matriculable: fechaHasta < ara')
        return false;
    }
    
    if( fechaMatricula ) { 
        //console.log('matriculable: fechaMatricula')
        return true;
    } else if( fechaIniPreinscripcion ) {
        if( fechaFinPreinscripcion && fechaFinPreinscripcion < ara) {
            return false;
        }
        return true;
    }
}
