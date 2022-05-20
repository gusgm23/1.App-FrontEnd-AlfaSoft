import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutScreen } from '../components/AboutScreen'
import { HomeScreen } from '../components/Home/HomeScreen'
import { LoginScreen } from '../components/Login/LoginScreen'
import { ContenidoNavPublico } from '../components/NavBar/ContenidoNavPublico'
import { NavBar } from '../components/NavBar/NavBar'

export const HomeRoutes = () => {
    return (
        <>
            <NavBar>
                <ContenidoNavPublico/>
            </NavBar>
            <Routes>
                <Route path='home'              element={<HomeScreen/>}/>
                <Route exact path='about'       element={<AboutScreen/>}/>
                <Route path='login'             element={<LoginScreen/>}/>
            </Routes>
        </>
    )
}
