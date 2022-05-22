import React from 'react'

import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";

import { AboutScreen } from '../components/AboutScreen';
import { Error404Screen } from '../components/Page404/Error404Screen';
import { Footer } from '../components/Footer/Footer';
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { PrivateRouteAdmi } from './PrivateRouteAdmi';
import { AdminRoutes } from './AdminRoutes';
import { PrivateRouteDoc } from './PrivateRouteDoc';
import { DocenteRoutes } from './DocenteRoutes';
import { PublicRoute } from './PublicRoute';
import { NavBar } from '../components/NavBar/NavBar';
import { ContenidoNavPublico } from '../components/NavBar/ContenidoNavPublico';
import { RegistroUsuarios } from '../components/RegistroUsuarios/RegistroUsuarios';


import { ListarSolicitudes } from '../components/ReservaAulas/ListarSolicitudes';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

                {/* <NavBar/> */}

                <Routes>

                    <Route path='/about' element={
                        <>
                            <NavBar>
                                <ContenidoNavPublico/>
                            </NavBar>
                            <AboutScreen/>
                        </>
                    }/>

                    <Route path='/' element={ 
                        <>
                            <NavBar>
                                <ContenidoNavPublico/>
                            </NavBar>
                            <HomeScreen/>
                        </>
                    }/>

                    <Route path='/registrousuario' element={
                        <PublicRoute>
                            <RegistroUsuarios />
                        </PublicRoute>
                    }/>

                    <Route path='/login' element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }/>

                    <Route path='/admin/*' element={
                        <PrivateRouteAdmi>
                            <AdminRoutes/>
                        </PrivateRouteAdmi>
                    }/>

                    <Route path='/docente/*' element={
                        <PrivateRouteDoc>
                            <DocenteRoutes/>
                        </PrivateRouteDoc>
                    }/>

                    <Route exact path='/listarlassolicitudes'  element={<ListarSolicitudes/>}/>

                    <Route path='*'                         element={<Error404Screen/>}/>
                </Routes>

                <Footer/>

            </div>
        </BrowserRouter>
    )
}