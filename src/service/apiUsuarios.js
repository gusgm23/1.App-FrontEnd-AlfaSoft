import axios from "axios";

//API para obtener solo los usuarios que estan habilitados
export const getUsuariosHabilitados = async ( setListaUsuariosHabilitados )  =>{
    await axios.get(`http://127.0.0.1:8000/api/obtenerUsuariosActivos`)
    .then( response => {
        setListaUsuariosHabilitados({
            state: true,
            data: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

//API para obtener todos los usuarios
export const getUsuarios = async ( setListaUsuarios )  =>{
    await axios.get(`http://127.0.0.1:8000/api/obtenerUsuarios`)
    .then( response => {
        setListaUsuarios({
            state: true,
            data: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

export const getUsuariosId = (id) => {
    return axios.get(`http://127.0.0.1:8000/api/obtenerUsuariosId/${id}`);
}

export const createUsuario = ({ data }, rol_id, openModalSuccess, openModalWarning) => {
    return axios.post(`http://127.0.0.1:8000/api/crearUsuarios`,
    {
        name:               `${data.name}`,
        apellido:           `${data.apellido}`,
        telefonoUsuario:    `${data.telefonoUsuario}`,
        direccionUsuario:   `${data.direccionUsuario}`,
        email:              `${data.email}`,
        password:           `${data.password}`,
        repeatPassword:     `${data.repeatPassword}`,
        estadoUsuario:      `${data.estadoUsuario}`,
        rol_id:             `${rol_id}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

export const updateUsuario = ({ data }, rol_id, openModalSuccess, openModalWarning, id) => {
    return axios.put(`http://127.0.0.1:8000/api/actualizarUsuarios/${id}`,
    {
        id:                 `${id}`,
        name:               `${data.name}`,
        apellido:           `${data.apellido}`,
        telefonoUsuario:    `${data.telefonoUsuario}`,
        direccionUsuario:   `${data.direccionUsuario}`,
        email:              `${data.email}`,
        password:           `${data.password}`,
        repeatPassword:     `${data.repeatPassword}`,
        estadoUsuario:      `${data.estadoUsuario}`,
        rol_id:             `${rol_id}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

export const deleteUsuario = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarUsuarios/${id}`);
}