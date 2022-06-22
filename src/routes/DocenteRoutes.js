import React, { useContext,useEffect,useState }from 'react'
import { Route, Routes } from 'react-router-dom';
import { DocenteHome } from '../components/Docente/DocenteHome';

import { VerSolicitudesDoc } from '../components/ReservaAulas/VerSolicitudes/VerSolicitudesDoc';

import { ContenidoNavDocente } from '../components/NavBar/ContenidoNavDocente';
import { NavBar } from '../components/NavBar/NavBar';
import { Error404Screen } from '../components/Page404/Error404Screen';
import { SolicitudesAprobadas } from '../components/Docente/SolicitudesAprobadas/SolicitudesAprobadas';
import { FormularioReservaAula } from '../components/ReservaAulas/FormularioReservaAula';
import {EditarPerfil} from '../components/Docente/PerfilDocente/EditarPerfil';
//Para editar el perfil
import { getUsuarioId } from '../service/apiUsuarios'
import { AuthContext } from '../auth/authContext';
import { SolicitudesRechazadas } from '../components/Docente/SolicitudesRechazadas/SolicitudesRechazadas';


export const DocenteRoutes = () => {
    const{user}= useContext (AuthContext);
//
const [usuario, setUsuario ] = useState({
  state: false,
  data: []
});

const {state, data} = usuario;

useEffect(() => {
  getUsuarioId(setUsuario,user.idDocente);
}, [state]);
    
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
                <Route exact path='perfildocente'                element={<EditarPerfil nom={data.name} ape={data.apellido} tel={data.telefonoUsuario} dir={data.direccionUsuario} cor={data.email} con={data.password} conf={data.repeatPassword} />}/>

                <Route exact path='verrechazados'                element={<SolicitudesRechazadas/>}/>

                <Route path='*'                                 element={<Error404Screen/>}/>
            </Routes>
        </>
        
    )
}
