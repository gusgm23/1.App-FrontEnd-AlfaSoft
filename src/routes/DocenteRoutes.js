import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { DocenteHome } from '../components/Docente/DocenteHome';

import { VerSolicitudesDoc } from '../components/ReservaAulas/VerSolicitudes/VerSolicitudesDoc';

import { ContenidoNavDocente } from '../components/NavBar/ContenidoNavDocente';
import { NavBar } from '../components/NavBar/NavBar';
import { Error404Screen } from '../components/Page404/Error404Screen';
import { SolicitudesAprobadas } from '../components/Docente/SolicitudesAprobadas/SolicitudesAprobadas';
import { FormularioReservaAula } from '../components/ReservaAulas/FormularioReservaAula';


export const DocenteRoutes = () => {
    return (
        <>
            <NavBar>
                <ContenidoNavDocente/>
            </NavBar>
            <Routes>
                <Route exact path='home'                        element={<DocenteHome/>}/>
                <Route exact path='listarsolicitudes'           element={<VerSolicitudesDoc/>}/>
                <Route exact path='veraprobados'                element={<SolicitudesAprobadas/>}/>
                <Route exact path='registrarsolicitud'          element={<FormularioReservaAula/>} />

                <Route path='*'                                 element={<Error404Screen/>}/>
            </Routes>
        </>
    )
}
