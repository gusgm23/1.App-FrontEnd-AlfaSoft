import axios from "axios";
import { baseUrl } from "./apiAulas";

export const getMateria = async ( setListaMateria )  =>{
    await axios.get(`${baseUrl}/obtenerMaterias`)
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
    return axios.get(`${baseUrl}/obtenerMateriasId/${id}`);
}

export const createMateria = ({ codSis, materia }, user_id, estado,openModalSuccess, openModalWarning) =>{
    return axios.post(`${baseUrl}/crearMateria`,
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
    return axios.put(`${baseUrl}/actualizarMateria/${id}`,
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
    return axios.delete(`${baseUrl}/eliminarMateria/${id}`);
}

