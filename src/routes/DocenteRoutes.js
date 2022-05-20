import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { DocenteHome } from '../components/Docente/DocenteHome';
import { HistorialSolicitudes } from '../components/Docente/HistorialSolicitudes';
import { ListarSolicitudes } from '../components/ReservaAulas/ListarSolicitudes';

import { ContenidoNavDocente } from '../components/NavBar/ContenidoNavDocente';
import { NavBar } from '../components/NavBar/NavBar';
import { Error404Screen } from '../components/Page404/Error404Screen';


export const DocenteRoutes = () => {
    return (
        <>
            <NavBar>
                <ContenidoNavDocente/>
            </NavBar>
            <Routes>
                <Route exact path='home'                        element={<DocenteHome/>}/>
                <Route exact path='listarlassolicitudes'        element={<ListarSolicitudes/>}/>
                <Route exact path='verhistorial'                element={<HistorialSolicitudes/>}/>

                <Route path='*'                         element={<Error404Screen/>}/>
            </Routes>
        </>
    )
}
