
export const validarCamposVaciosMateria = (valores = {}) => {
    const {codSis, materia, grupo} = valores;

    const Sis = parseInt(codSis);

    if(Sis === 0 && materia.length == 0 && grupo.length == 0){
        return true;
    }else if(Sis === 0 || materia.length == 0 || grupo.length == 0){
        return true;
    }else {
        return false;
    }

}

export const validarCamposLlenosMateria = (valores = {}) => {
    
    const {codSis, materia, grupo} = valores;
    const Sis = String(codSis)

    if( Sis.length >= 8 && materia.length >= 4 && grupo.length >= 1 ){
        return true;
    }else{
        console.log(codSis.length, materia.length, grupo.length)
        return false;
    }

}

export const validarCamposVaciosAula = ( valores = {}, estado = '' ) => {

    const { aula, capacidad } = valores;

    if( aula.length == 0 && capacidad == 0 && estado ===  'estado'){
        console.log('campos vacios');
        return true;
    }else if( aula.length == 0 || capacidad == 0 || estado ===  'estado' ){
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
    }else if ( tamanioGrupo > 3 ) {
        setStatusInputGroup(true);
        setMsjErrorGroup('El dato ingresado es demasiado largo.')
    }else{
        setStatusInputGroup(false);
        setMsjErrorGroup('');
    }

}