import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { RegistroAulasScreen } from './RegistroAulasScreen';
import { RegistroUsuarios } from './RegistroUsuariosScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar/>

                <Routes>
                    <Route exact path='/'                 element={<HomeScreen/>}/>
                    <Route exact path='/about'            element={<AboutScreen/>}/>
                    <Route exact path='/login'            element={<LoginScreen/>}/>
                    <Route exact path='/registroaula'     element={<RegistroAulasScreen/>}/>
                    <Route exact path='/registrousuario'  element={<RegistroUsuarios/>}/>
                    
                </Routes>
            </div>
        </Router>
    )
}
