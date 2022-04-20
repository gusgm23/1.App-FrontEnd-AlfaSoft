import axios from "axios";

export const getMateria = () =>{
    return axios.get('http://127.0.0.1:8000/api/obtenerMaterias');
}

export const getMateriaId = (id) =>{
    return axios.get(`http://127.0.0.1:8000/api/obtenerMateriasId/${id}`);
}

export const createMateria = (dato) =>{
    return axios.post('http://127.0.0.1:8000/api/crearMateria',
    {
        id:             `${dato.id}`,
        nombreMateria:  `${dato.nombreMateria}`,
        grupoMateria:   `${dato.grupoMateria}`,
        codigoMateria:  `${dato.codigoMateria}`,
        name:           `${dato.name}`
    }
    ).then(function (response) {
        console.log(response);
    }
    ).catch(function (error){
        console.log(error);
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
    ).then(function (response) {
        console.log(response);
    }
    ).catch(function (error) {
        console.log(error);
    });
}

export const deleteMateriaId = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarMateria/${id}`);
}

