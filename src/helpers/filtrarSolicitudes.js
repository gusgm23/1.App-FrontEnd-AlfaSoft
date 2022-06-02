
export const filtrarSolicitudes = (ListaSolicitudes=[], idMat, setdataSolicitud) => {

    const Limpia = [];

    ListaSolicitudes.forEach(element => {
        if(element.materia_id == idMat){
            Limpia.push(element);
        }
    });
    setdataSolicitud(Limpia);
}

export const getSolicitudesPendientes = (ListaSolicitudes=[], setdataSolicitud) => {

    const Limpia = [];

    ListaSolicitudes.forEach(element => {
        if(element.estadoSolicitud == "pendiente"){
            Limpia.push(element);
        }
    });
    setdataSolicitud(Limpia);
}