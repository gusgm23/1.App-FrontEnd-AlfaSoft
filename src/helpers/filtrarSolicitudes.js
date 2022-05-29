
export const filtrarSolicitudes = (ListaSolicitudes=[], idMat, setdataSolicitud) => {

    const Limpia = [];

    ListaSolicitudes.forEach(element => {
        if(element.materia_id == idMat){
            Limpia.push(element);
        }
    });
    setdataSolicitud(Limpia);
}