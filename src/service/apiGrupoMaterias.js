import axios from "axios";

export const getGrupoMateria = ( ) => {
    axios.get('http://127.0.0.1:8000/api/obtenerGrupos')
}

export const getGrupoMateriaId = (id) => {
    return axios.get(`http://127.0.0.1:8000/api/obtenerGruposId/${id}`);
}

export const createGrupoMateria = () => {
    return axios.post(`http://127.0.0.1:8000/api/crearGrupos`,
    {
       id:                  `${id}`,
       grupoMateria:        `${grupoMateria}`,
       estadoGrupoMateria:  `${estadoGrupoMateria}`,
       materia_id:          `${materia_id}`
    }
    ).then( (response) => {
        console.log(response);
    }).catch( (error) => {
        console.log(error);
    });
}

export const updateGrupoMateriaId = (dato, id) => {
    return axios.put(`http://127.0.0.1:8000/api/actualizarGrupos/${id}`,
    {
        id:                  `${dato.id}`,
        grupoMateria:        `${dato.grupoMateria}`,
        estadoGrupoMateria:  `${dato.estadoGrupoMateria}`,
        materia_id:          `${dato.materia_id}`
    }
    ).then( (response) => {
        console.log(response);
    }
    ).catch( function (error) {
        console.log(error);
    });
}

export const deleteGrupoMateriaId = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarGrupos/${id}`);
}