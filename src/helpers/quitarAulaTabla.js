export const quitarAulaTabla = (aula, listaAulas, setter) => {

    const aulas = listaAulas.filter(item => item.id !== aula);

    setter(aulas);

}