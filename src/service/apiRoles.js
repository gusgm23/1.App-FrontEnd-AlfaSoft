import axios from "axios";
import { baseUrl } from "./apiAulas";

//API para obtener solo los roles que estan habilitados
export const getRolesHabilitados = async ( setListaRolesHabilitados ) => {
    await axios.get(`${baseUrl}/obtenerRolesActivos`)
    .then( response => {
        setListaRolesHabilitados({
            state: true,
            data: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    })
}

//API para obtener todos los roles
export const getRoles = async ( setListaRoles ) => {
    await axios.get(`${baseUrl}/obtenerRoles`)
    .then( response => {
        setListaRoles({
            state: true,
            dataRol: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    })
}

export const getRolesId = async (id, setRespuesta) => {
    await axios.get(`${baseUrl}/obtenerRolesId/${id}`)
        .then( (response) => {
            setRespuesta({
                state: true,
                dataRol: response.data
            });
        } )
        .catch( e => {
            console.log(e);
        } )
}

export const createRol = ( { data }, openModalSuccess, openModalWarning) => {
    return axios.post(`${baseUrl}/crearRol`,
    {
        rol:        `${data.rol}`,
        estado:     `${data.estado}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

export const updateRolId = ({ data }, openModalSuccess, openModalWarning, id) => {
    return axios.put(`${baseUrl}/actualizarRol/${id}`,
    {
        id:         `${id}`,
        rol:        `${data.rol}`,
        estado:     `${data.estado}`
    }
    ).then( (response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

