import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Solicitud } from '../components/AdministracioSolicitud/Solicitud'
import { AdministradorScreen } from '../components/Administrador/AdministradorScreen'
import { RegistroAulasScreen } from '../components/Aulas/RegistroAulas/RegistroAulasScreen'
import { VistaAulas } from '../components/Aulas/Ver Aulas/VistaAulas'
import { RegistroMateria } from '../components/Materias/RegistroMateria/RegistroMateria'
import { VerMaterias } from '../components/Materias/VerMaterias/VerMaterias'
import { ContenidoNavAdmin } from '../components/NavBar/ContenidoNavAdmin'
import { NavBar } from '../components/NavBar/NavBar'
import { Error404Screen } from '../components/Page404/Error404Screen'
import { RegistroRoles } from '../components/Roles/RegistroRoles'
import { VerSolicitudes } from '../components/SolicitudAulas/VerSolicitudes'
import { VerUsuarios } from '../components/RegistroUsuarios/VerUsuarios/VerUsuarios';


export const AdminRoutes = () => {
    
    return (
        <>
            <NavBar>
                <ContenidoNavAdmin/>
            </NavBar>
            <Routes>
                <Route path='adminhome'                 element={ <AdministradorScreen/> }/>
                <Route exact path='/verusarios'         element={<VerUsuarios/>}/>
                <Route exact path='registroaula'        element={ <RegistroAulasScreen/> }/>
                <Route exact path='registrorol'         element={<RegistroRoles/>}/>
                <Route exact path='registromateria'     element={<RegistroMateria/>}/>

                <Route exact path='versolicitudes'      element={<VerSolicitudes/>}/>
                <Route exact path='veraulas'            element={<VistaAulas/>}/>
                <Route exact path='vermaterias'         element={<VerMaterias/>}/>

                <Route exact path='administrarsolicitud'         element={<Solicitud/>}/>

                <Route path='*'                         element={<Error404Screen/>}/>
            </Routes>
        </>
    )
}
