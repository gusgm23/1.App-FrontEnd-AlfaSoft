import axios from "axios";

export const getGrupoMateria = async ( setStateData ) => {
    await axios.get('https://reserva-de-aulas-backend.herokuapp.com/api/obtenerGrupos')
    .then( response => {
        setStateData({
            states: true,
            datas: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

export const getGrupoMateriaId = (id, setStateData) => {
    axios.get(`https://reserva-de-aulas-backend.herokuapp.com/api/obtenerGruposId/${id}`)
    .then( response => {
        setStateData({
            state: true,
            dataMat: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

export const createGrupoMateria = ( grupoMateria, estadoGrupoMateria, materia_id, openModalSuccess, openModalWarning) => {
    return axios.post(`https://reserva-de-aulas-backend.herokuapp.com/api/crearGrupos`,
    {
        grupoMateria:        `${grupoMateria}`,
        estadoGrupoMateria:  `${estadoGrupoMateria}`,
        materia_id:          `${materia_id}`
    }
    ).then( (response) => {
        
        openModalSuccess();

    }).catch( (error) => {

        openModalWarning();

    });
}

export const updateGrupoMateriaId = (grupoMateria, estadoGrupoMateria, materia_id, openModalSuccess, openModalWarning, id) => {
    return axios.put(`https://reserva-de-aulas-backend.herokuapp.com/api/actualizarGrupos/${id}`,
    {
        id:                  `${id}`,
        grupoMateria:        `${grupoMateria}`,
        estadoGrupoMateria:  `${estadoGrupoMateria}`,
        materia_id:          `${materia_id}`
    }
    ).then( (response) => {
        
        openModalSuccess();

    }
    ).catch( function (error) {
        
        openModalWarning();

    });
}

export const deleteGrupoMateriaId = (id) => {
    return axios.delete(`https://reserva-de-aulas-backend.herokuapp.com/api/eliminarGrupos/${id}`);
}