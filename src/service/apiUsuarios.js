import axios from "axios";
import { baseUrl } from "./apiAulas";



//API para obtener solo los usuarios que estan habilitados
export const getUsuariosHabilitados = async ( setListaUsuariosHabilitados )  =>{
    await axios.get(`${baseUrl}/obtenerUsuariosActivos`)
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
    await axios.get(`${baseUrl}/obtenerUsuarios`)
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
    return axios.get(`${baseUrl}/obtenerUsuariosId/${id}`);
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

    return axios.post(`${baseUrl}/crearUsuarios`,
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
    estadoUsuario,
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

    return axios.put(`${baseUrl}/actualizarUsuarios/${id}`,
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

export const ModificarUsuario = async ( {
    apellido,
    cargoUsuario,
    direccionUsuario,
    email,
    estadoUsuario,
    id,
    name,
    password,
    repeatPassword,
    rol_id,
    telefonoUsuario
    }, openModalSuccess) => {
       

    await axios.put(`${baseUrl}/actualizarUsuarios/${id}`,
    {
        id:                 `${id}`,
        name:               `${name}`,
        apellido:           `${apellido}`,
        telefonoUsuario:    `${telefonoUsuario}`,
        direccionUsuario:   `${direccionUsuario}`,
        email:              `${email}`,
        password:           `${password}`,
        repeatPassword:     `${repeatPassword}`,
        estadoUsuario:      `${estadoUsuario}`,
        cargoUsuario:       `${cargoUsuario}`,
        rol_id:             `${rol_id}`
    }
    ).then(( response ) => {
        openModalSuccess();
       console.log('asda')
    }
    ).catch( function ( error )  {
        // openModalWarning();
        console.log('error')
    });
}

export const eliminarUsuarios = async (id) => {
    await axios.put(`${baseUrl}/actualizarUsuarios/${id}`, {
        estadoUsuario: 'Inhabilitado'
    });
}