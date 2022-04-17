
export const validarCamposVaciosMateria = (valores = {}) => {
    const {codSis, materia, grupo} = valores;

    if(codSis.length == 0 && materia.length == 0 && grupo.length == 0){
        return true;
    }else if(codSis.length == 0 || materia.length == 0 || grupo.length == 0){
        return true;
    }else {
        return false;
    }

}

export const validarCamposLlenosMateria = (valores = {}) => {
    const {codSis, materia, grupo} = valores;

    if( codSis.length >= 8 && materia.length >= 4 && grupo >= 1 ){
        return true;
    }else{
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