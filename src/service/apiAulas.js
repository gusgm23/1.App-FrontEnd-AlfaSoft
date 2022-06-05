import axios from "axios";

//export const baseUrl="http://alfa.tis.cs.umss.edu.bo/api";
export const baseUrl="http://127.0.0.1:8000/api";

//API para obtener las aulas Libres
export const getAulasLibres = async ( setListaAulasLibres )  =>{
    await axios.get(`http://127.0.0.1:8000/api/obtenerAulaLibre`)
    .then( response => {
        setListaAulasLibres({
            state: true,
            data: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

//API para obtener todas las aulas
export const getAulas = async ( setListaAulas )  =>{
    await axios.get(`http://127.0.0.1:8000/api/obtenerAula`)
    .then( response => {
        setListaAulas({
            state: true,
            data: response.data
        });
    } )
    .catch( e => {
        console.log(e);
    } )
}

export const getEnableClassRoom=(setListaAulas)=>{
    return axios.get(`${baseUrl}/obtenerAulaHabilitada`).then( response => {
        setListaAulas({
            state: true,
            data: response.data
        });
    } );
}

export const getAulasId = (id) =>{
    return axios.get(`http://127.0.0.1:8000/api/obtenerAulaId/${id}`);
}
export const deleteClassRoom = (id) =>{
    return axios.delete(`${baseUrl}/eliminarAula/${id}`);
}

export const createAula = ({ data }, solicitud_id, openModalSuccess, openModalWarning) => {

    return axios.post(`http://127.0.0.1:8000/api/crearAula`,
    
    {
        nombreAula:         `${data.nombreAula}`,
        capacidadAula:      `${data.capacidadAula}`,
        estadoAula:         `${data.estadoAula}`,
        solicitud_id:       `${solicitud_id}`,
        habilitacionAula:   `${data.habilitacionAula}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

export const updateAula = ({ data }, solicitud_id, openModalSuccess, openModalWarning, id) => {
    return axios.put(`http://127.0.0.1:8000/api/actualizarAula/${id}`,
    {
        id:                 `${id}`,
        nombreAula:         `${data.nombreAula}`,
        capacidadAula:      `${data.capacidadAula}`,
        estadoAula:         `${data.estadoAula}`,
        solicitud_id:       `${solicitud_id}`
    }
    ).then(( response ) => {
        openModalSuccess();
    }
    ).catch(( error ) => {
        openModalWarning();
    });
}

export const updateClassRoom=(newClassRoom,id)=>{
    return axios.put(`${baseUrl}/actualizarAula/${id}`,newClassRoom);
}

export const logicDelete=(id)=>{
    return axios.put(`${baseUrl}/actualizarAula/${id}`,  {
        habilitacionAula: "Inhabilitado"
    });
}