import axios from "axios";
import { baseUrl } from "./apiAulas";

export const getGrupoMateria = async ( setStateData ) => {
    await axios.get(`${baseUrl}/obtenerGrupos`)
    .then( response => {

        const data = {
            state: true,
            data: response.data
        }

        setStateData(data);
    } )
    .catch( e => {
        console.log(e);
    } )
}

export const getGrupoMateriaId = (id, setStateData) => {
    axios.get(`${baseUrl}/obtenerGruposId/${id}`)
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

export const createGrupoMateria = async ( grupoMateria, estadoGrupoMateria, materia_id, idDocente, idAuxiliar, openModalSuccess, openModalWarning) => {
    
    await axios.post(`${baseUrl}/crearGrupos`,
    {
        grupoMateria:        `${grupoMateria}`,
        idDocente:           `${idDocente}`,
        idAuxiliar:          `${idAuxiliar}`,
        estadoGrupoMateria:  `${estadoGrupoMateria}`,
        materia_id:          `${materia_id}`
    }
    ).then( (response) => {
        
        openModalSuccess();

    }).catch( (error) => {

        openModalWarning();

    });
}

export const updateGrupoMateriaId = (grupoMateria, estadoGrupoMateria, materia_id, idDocente, idAuxiliar, openModalSuccess, openModalWarning, id) => {
    console.log("🚀 ~ file: apiGrupoMaterias.js ~ line 67 ~ updateGrupoMateriaId ~ materia_id", materia_id)
    console.log("🚀 ~ file: apiGrupoMaterias.js ~ line 67 ~ updateGrupoMateriaId ~ estadoGrupoMateria", estadoGrupoMateria)
    console.log("🚀 ~ file: apiGrupoMaterias.js ~ line 59 ~ updateGrupoMateriaId ~ grupoMateria", grupoMateria)
    console.log("🚀 ~ file: apiGrupoMaterias.js ~ line 59 ~ updateGrupoMateriaId ~ id", id)
    console.log("🚀 ~ file: apiGrupoMaterias.js ~ line 63 ~ updateGrupoMateriaId ~ idAuxiliar", idAuxiliar)
    console.log("🚀 ~ file: apiGrupoMaterias.js ~ line 63 ~ updateGrupoMateriaId ~ idDocente", idDocente)
    return axios.put(`${baseUrl}/actualizarGrupos/${id}`,
    {
        id:                  `${id}`,
        grupoMateria:        `${grupoMateria}`,
        idDocente:           `${idDocente}`,
        idAuxiliar:          `${idAuxiliar}`,
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