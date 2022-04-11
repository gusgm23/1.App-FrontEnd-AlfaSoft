import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import { NavBar } from '../../NavBar';
import { AboutScreen } from '../../AboutScreen';
import { HomeScreen } from '../../HomeScreen';
import { LoginScreen } from '../../LoginScreen';

import { RegistroUsuarios } from '../../RegistroUsuariosScreen';
import { Error404Screen } from '../../Page404/Error404Screen';
import { VistaAulas } from '../Ver Aulas/VistaAulas';
import { RegistroAulasScreen } from '../RegistroAulas/RegistroAulasScreen';


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
                    <Route exact path='/veraulas'           element={<VistaAulas/>}/>
                    <Route path='*'                         element={<Error404Screen/>}/>
                </Routes>
            </div>
        </Router>
    )
}
