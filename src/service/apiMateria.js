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

export const createMateria = ({ codSis, materia, grupo }, id, name, openModalSuccess, openModalWarning) =>{
    return axios.post('http://127.0.0.1:8000/api/crearMateria',
    {
        id:             `${id}`,
        nombreMateria:  `${materia}`,
        grupoMateria:   `${grupo}`,
        codigoMateria:  `${codSis}`,
        name:           `${name}`
    }
    ).then( (response) => {

        openModalSuccess();
        
    }
    ).catch( (error) => {
        
        openModalWarning();

    });
}

export const updateMateriaId = (dato, id) =>{
    return axios.put(`http://127.0.0.1:8000/api/actualizarMateria/${id}`,
    {
        id:             `${dato.id}`,
        nombreMateria:  `${dato.nombreMateria}`,
        grupoMateria:   `${dato.grupoMateria}`,
        codigoMateria:  `${dato.codigoMateria}`,
        name:           `${dato.name}`
    }
    ).then( (response) => {
        console.log(response);
    }
    ).catch(function (error) {
        console.log(error);
    });
}

export const deleteMateriaId = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarMateria/${id}`);
}

