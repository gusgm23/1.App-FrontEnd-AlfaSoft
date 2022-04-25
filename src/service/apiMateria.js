import axios from "axios";

export const getMateria = ( setListaMateria ) =>{
    axios.get('http://127.0.0.1:8000/api/obtenerMaterias')
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
    return axios.get(`http://127.0.0.1:8000/api/obtenerMateriasId/${id}`);
}

export const createMateria = ({ codSis, materia }, user_id, estado,openModalSuccess, openModalWarning) =>{
    return axios.post('http://127.0.0.1:8000/api/crearMateria',
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
    return axios.put(`http://127.0.0.1:8000/api/actualizarMateria/${id}`,
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
    return axios.delete(`http://127.0.0.1:8000/api/eliminarMateria/${id}`);
}

