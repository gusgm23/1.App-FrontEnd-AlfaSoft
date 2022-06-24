export const validarCamposVaciosMateria = (valores = {}) => {
    const {codSis, materia} = valores;

    const Sis = parseInt(codSis);

    if(Sis === 0 && materia.length === 0){
        return true;
    }else if(Sis === 0 || materia.length === 0){
        return true;
    }else {
        return false;
    }

}

export const validaCamposVaciosGrupo = ( valores = {}, docente ) => {
    const { grupo } = valores;

    if( grupo.length === 0 || docente === 'Vacio' ){
        return true;
    }else {
        return false;
    }

}

export const validarCamposLlenosMateria = (valores = {}) => {
    
    const {codSis, materia} = valores;
    const Sis = String(codSis)

    if( Sis.length >= 8 && materia.length >= 4 ){
        return true;
    }else{
        console.log(codSis.length, materia.length)
        return false;
    }

}

export const validarCamposLlenosGrupo = ( valores = {} ) => {

    const { grupo } = valores;

    if( grupo.length >=1 && grupo.length <= 5){
        return true;
    }else{
        return false;
    }

}

export const validarCamposVaciosAula = ( valores = {}, estado = '' ) => {

    const { aula, capacidad } = valores;

    if( aula.length === 0 && capacidad === 0 && estado ===  'estado'){
        console.log('campos vacios');
        return true;
    }else if( aula.length === 0 || capacidad === 0 || estado ===  'estado' ){
        console.log('existen campos vacios')
        return true;
    }else {
        return false
    }

}

export const validarCamposLlenosAula = ( valores = {} ) => {
    
    const { aula, capacidad } = valores;
    const numCapacidad = parseInt(capacidad);

    if( aula.length >= 3 && numCapacidad >= 10 ){
        return true;
    }else{
        return false;
    }

}

export const controlarCampoCapacidad = (capacidad, setStatusInput) => {
    const numCapacidad = parseInt(capacidad);

    if( numCapacidad >= 5 && numCapacidad <= 100){
        setStatusInput(false);
    }else{
        setStatusInput(true);
    }
}

export const controlarCampoAula = ( aula='', setStatusInputAula ) => {

    const tamanioAula = aula.length
    
    if(tamanioAula >= 3 && tamanioAula <= 10){
        setStatusInputAula(false);
    }else{
        setStatusInputAula(true);
    }

}

export const controlarCampoCodSis = ( codSis='', setStatusInputCodSis ) => {

    const sis = String(codSis).length;

    if( sis >= 8 && sis <= 9 ){
        setStatusInputCodSis(false);
    }else{
        setStatusInputCodSis(true);
    }

}

export const controlarCampoMateria = ( materia='', setStatusInputMateria, setMsjErrorMateria ) => {
    
    const tamanioMateria = materia.length;

    if( tamanioMateria < 4 ){
        setStatusInputMateria(true);
        setMsjErrorMateria('El nombre es demasiado corto.');
    } else if( tamanioMateria > 80 ){
        setStatusInputMateria(true);
        setMsjErrorMateria('El nombre es demasiado largo.');
    }else {
        setStatusInputMateria(false);
        setMsjErrorMateria('');
    }

}

export const controlarCampoGrupo = ( grupo='', setStatusInputGroup, setMsjErrorGroup ) => {

    const tamanioGrupo = grupo.length;

    if( tamanioGrupo < 1 ) {
        setStatusInputGroup(true);
        setMsjErrorGroup('El dato ingresado es demasiado corto.');
    }else if ( tamanioGrupo > 5 ) {
        setStatusInputGroup(true);
        setMsjErrorGroup('El dato ingresado es demasiado largo.')
    }else{
        setStatusInputGroup(false);
        setMsjErrorGroup('');
    }

}

export const verificarExistenciaMateria = ({data=[]}, formValues, setMateriaExiste, setCodExiste, setSePuedeGuardar, codiSis, materi) => {

    const { codSis,  materia} = formValues

    data.forEach(element => {
        
        if(codiSis === ''){
            if(element.codigoMateria === codSis){
                if(element.nombreMateria === materia){
                    setCodExiste(true);
                    setMateriaExiste(true);
                    setSePuedeGuardar(false);
                }else{
                    setCodExiste(true);
                    setSePuedeGuardar(false);
                }
            }else if(element.nombreMateria === materia){
                setMateriaExiste(true);
                setSePuedeGuardar(false);
            }else{
                setSePuedeGuardar(true);
            }
        }else{
            
            if(element.codigoMateria === codSis && element.codigoMateria !== codiSis){
                if(element.nombreMateria === materia && element.nombreMateria !== materi){
                    setCodExiste(true);
                    setMateriaExiste(true);
                    setSePuedeGuardar(false);
                }else{
                    setCodExiste(true);
                    setSePuedeGuardar(false);
                }
            }else if(element.nombreMateria === materia && element.nombreMateria !== materi){
                setMateriaExiste(true);
                setSePuedeGuardar(false);
            }else{
                setSePuedeGuardar(true);
            }
        }

    });

}

//Para controlar los campos del formulario de solicitud de aulas
export const controlarCampoNomDocente = ( nombreDocente='', setStatusInputNomDocente, setMsjErrorNomDocente) => {
    const tamanioNomDocente = nombreDocente.length;

    if( tamanioNomDocente < 3 ){
        setStatusInputNomDocente(true);
        setMsjErrorNomDocente('El nombre del docente es demasiado corto.');
    }else if( tamanioNomDocente > 30 ){
        setStatusInputNomDocente(true);
        setMsjErrorNomDocente('El nombre del docente es demasiado largo.');
    }else {
        setStatusInputNomDocente(false);
        setMsjErrorNomDocente('');
    }
}

export const controlarCampoApeDocente = ( apellidoDocente='', setStatusInputApeDocente, setMsjErrorApeDocente ) => {
    const tamanioApeDocente = apellidoDocente.length;

    if( tamanioApeDocente < 3 ){
        setStatusInputApeDocente(true);
        setMsjErrorApeDocente('El apellido del docente es demasiado corto.');
    }else if( tamanioApeDocente > 30 ){
        setStatusInputApeDocente(true);
        setMsjErrorApeDocente('El apellido del docente es demasiado largo.');
    }else {
        setStatusInputApeDocente(false);
        setMsjErrorApeDocente('');
    }
}

export const controlarCampoCantidad = ( cantidadEstudiantes, setStatusInputCantidad, setMsjErrorCantidad) => {
    const cantidadE = parseInt(cantidadEstudiantes);

    if( cantidadE >= 5 && cantidadE <= 350){
        setStatusInputCantidad(false);
        setMsjErrorCantidad('');
    }else {
        setStatusInputCantidad(true);
        setMsjErrorCantidad('Debe ingresar una cantidad entre 5 y 350.');
    }
}

export const controlarCampoPeriodo = ( peridoSolicitud, setStatusInputPeriodo, setMsjErrorPeriodo ) => {
    const tamanioPeriodo = parseInt(peridoSolicitud);

    if( tamanioPeriodo >= 1 && tamanioPeriodo <= 2 ){
        setStatusInputPeriodo(false);
        setMsjErrorPeriodo('');
    }else{
        setStatusInputPeriodo(true);
        setMsjErrorPeriodo('Debe ingresar periodos entre 1 y 2.');
    }
}

export const validarCamposVaciosSolicitud = (valores = {}) => {
    const { cantidadEstudiantes,    
            peridoSolicitud,
        } = valores;

    const cantEst = parseInt(cantidadEstudiantes);
    const perSol = parseInt(peridoSolicitud);

    if( cantEst === 0 &&   
        perSol === 0 ) {
            return true;
        }else if(cantEst === 0 ||              
                perSol === 0 ) {
                    return true;
                }else {
                    return false;
                }
}

export const validarCamposLlenosSolicitud = (valores = {}) => {
    const {cantidadEstudiantes,
        peridoSolicitud} = valores;

        const cantEst = parseInt(cantidadEstudiantes);
        const perSol = parseInt(peridoSolicitud);

        if(cantEst >= 5 && 
            //motivoSolicitud.length >= 10 && 
            perSol >= 1) {
                return true;
            }else {
                console.log(
                    cantidadEstudiantes.length,
                    //motivoSolicitud.length,
                    peridoSolicitud);
                return false;
            }
}

export const verificarExistenciaGrupo = (listaGrupos=[], grupo, idDoc, idEdit) => {
    let existeGrupo = false;

    listaGrupos.forEach(element => {
        if(element.grupoMateria === grupo && element.idDocente === idDoc && !existeGrupo && idEdit.length > 0) {
            existeGrupo = true
        }
    })

    return existeGrupo
}