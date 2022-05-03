import axios from "axios";

export const getMateria = async ( setListaMateria )  =>{
    await axios.get(`https://reserva-de-aulas-backend.herokuapp.com/api/obtenerMaterias`)
    .then( response => {
        setListaMateria({
            state: true,
            data: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

export const getMateriaId = (id) =>{
    return axios.get(`https://reserva-de-aulas-backend.herokuapp.com/api/obtenerMateriasId/${id}`);
}

export const createMateria = ({ codSis, materia }, user_id, estado,openModalSuccess, openModalWarning) =>{
    return axios.post('https://reserva-de-aulas-backend.herokuapp.com/api/crearMateria',
    {
        codigoMateria:  `${codSis}`,
        nombreMateria:  `${materia}`,
        estadoMateria:  `${estado}`,
        user_id:        `${user_id}`
    }
    ).then( (response) => {

        openModalSuccess();
        
    }
    ).catch( (error) => {
        
        openModalWarning();

    });
}

export const updateMateriaId = ({ codSis, materia }, user_id, estado,openModalSuccess, openModalWarning, id) =>{
    return axios.put(`https://reserva-de-aulas-backend.herokuapp.com/api/actualizarMateria/${id}`,
    {
        id:             `${id}`,
        codigoMateria:  `${codSis}`,
        nombreMateria:  `${materia}`,
        estadoMateria:  `${estado}`,
        user_id:        `${user_id}`
    }
    ).then( (response) => {
        
        openModalSuccess();

    }
    ).catch(function (error) {
        
        openModalWarning();

    });
}

export const deleteMateriaId = (id) => {
    return axios.delete(`https://reserva-de-aulas-backend.herokuapp.com/api/eliminarMateria/${id}`);
}

