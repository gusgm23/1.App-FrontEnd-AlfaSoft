import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { NavBar } from '../components/NavBar/NavBar';
import { AboutScreen } from '../components/AboutScreen';
import { RegistroUsuarios } from '../components/RegistroUsuarios/RegistroUsuarios';
import { Error404Screen } from '../components/Page404/Error404Screen';
import { VistaAulas } from '../components/Aulas/Ver Aulas/VistaAulas';
import { RegistroAulasScreen } from '../components/Aulas/RegistroAulas/RegistroAulasScreen';
import { FormularioReservaAula } from '../components/ReservaAulas/FormularioReservaAula';
import { RegistroMateria } from '../components/Materias/RegistroMateria/RegistroMateria';
import { VerMaterias } from '../components/Materias/VerMaterias/VerMaterias';
import { VerSolicitudes } from '../components/SolicitudAulas/VerSolicitudes';
import { RegSolicitud } from '../components/SolicitudAulas/RegistroSol/RegSolicitud';
import { VerGrupos } from '../components/Grupos/VerGrupos';
import { Footer } from '../components/Footer/Footer';
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar/>

                <Routes>
                    <Route exact path='/'                   element={<HomeScreen/>}/>
                    <Route exact path='/about'              element={<AboutScreen/>}/>
                    <Route exact path='/login'              element={<LoginScreen/>}/>
                    <Route exact path='/registroaula'       element={<RegistroAulasScreen/>}/>
                    <Route exact path='/registrousuario'    element={<RegistroUsuarios/>}/>
                    <Route exact path='/registromateria'    element={<RegistroMateria/>}/>
                    <Route exact path='/versolicitudes'     element={<VerSolicitudes/>}/>
                    <Route exact path='/regsolicitudes'     element={<RegSolicitud/>}/>
                    <Route exact path='/reservaaulas'       element={<FormularioReservaAula/>}/>
                    <Route exact path='/veraulas'           element={<VistaAulas/>}/>
                    <Route exact path='/vergrupos'          element={<VerGrupos/>}/>
                    <Route exact path='/vermaterias'        element={<VerMaterias/>}/>

                    <Route path='*'                         element={<Error404Screen/>}/>
                </Routes>

                <Footer/>

            </div>
        </Router>
    )
}