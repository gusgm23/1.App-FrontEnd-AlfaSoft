export const filtrarGrupos = (listaGrupos=[], idMateria, setDataLimpita) => {

    const listaLimpia = [];

    listaGrupos.forEach(element => {
        if(element.materia_id == idMateria){
            listaLimpia.push(element);
        }
    });

    setDataLimpita(listaLimpia);

}