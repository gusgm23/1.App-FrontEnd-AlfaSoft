import axios from "axios";

//API para obtener solo los usuarios que estan habilitados
export const getUsuariosHabilitados = async ( setListaUsuariosHabilitados )  =>{
    await axios.get(`http://127.0.0.1:8000/api/obtenerUsuariosActivos`)
    .then( response => {
        setListaUsuariosHabilitados({
            states: true,
            datas: response.data
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

export const createUsuario = ( 
    formValues, 
    rol_id, 
    cargoUsuario,
    estadoUsuario='Habilitado',
    openModalSuccess, 
    openModalWarning
    ) => {
        const {
            nombreUsuario, 
            apellidoUsuario, 
            telefonoUsuario, 
            direccionUsuario, 
            correoUsuario, 
            contraseñaUsuario, 
            contraseñaUsuarioConf
        } = formValues;

    return axios.post(`http://127.0.0.1:8000/api/crearUsuarios`,
    {
        name:               `${nombreUsuario}`,
        apellido:           `${apellidoUsuario}`,
        telefonoUsuario:    `${telefonoUsuario}`,
        direccionUsuario:   `${direccionUsuario}`,
        email:              `${correoUsuario}`,
        password:           `${contraseñaUsuario}`,
        repeatPassword:     `${contraseñaUsuarioConf}`,
        estadoUsuario:      `${estadoUsuario}`,
        cargoUsuario:       `${cargoUsuario}`,
        rol_id:             `${rol_id}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

export const updateUsuario = (
    
    formValues, 
    rol_id, 
    cargoUsuario,
    estadoUsuario='Habilitado',
    openModalSuccess, 
    openModalWarning,
    id
    ) => {
        const {
           nombreUsuario, 
           apellidoUsuario, 
           telefonoUsuario, 
           direccionUsuario, 
           correoUsuario, 
           contraseñaUsuario, 
           contraseñaUsuarioConf
        } = formValues;

    return axios.put(`http://127.0.0.1:8000/api/actualizarUsuarios/${id}`,
    {
        id:                 `${id}`,
        name:               `${nombreUsuario}`,
        apellido:           `${apellidoUsuario}`,
        telefonoUsuario:    `${telefonoUsuario}`,
        direccionUsuario:   `${direccionUsuario}`,
        email:              `${correoUsuario}`,
        password:           `${contraseñaUsuario}`,
        repeatPassword:     `${contraseñaUsuarioConf}`,
        estadoUsuario:      `${estadoUsuario}`,
        cargoUsuario:       `${cargoUsuario}`,
        rol_id:             `${rol_id}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch( function ( error )  {
        openModalWarning();
    });
}

export const deleteUsuario = (id) => {
    return axios.delete(`http://127.0.0.1:8000/api/eliminarUsuarios/${id}`);
}