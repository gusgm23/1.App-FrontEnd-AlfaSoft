import React, { useContext,useEffect,useState }from 'react'
import { Route, Routes } from 'react-router-dom';
import { DocenteHome } from '../components/Docente/DocenteHome';

import { VerSolicitudesDoc } from '../components/ReservaAulas/VerSolicitudes/VerSolicitudesDoc';

import { ContenidoNavDocente } from '../components/NavBar/ContenidoNavDocente';
import { NavBar } from '../components/NavBar/NavBar';
import { Error404Screen } from '../components/Page404/Error404Screen';
import { SolicitudesAprobadas } from '../components/Docente/SolicitudesAprobadas/SolicitudesAprobadas';
import { FormularioReservaAula } from '../components/ReservaAulas/FormularioReservaAula';
import {EditarScreen} from '../components/Docente/PerfilDocente/EditarScreen';

import {EditarPerfil} from '../components/Docente/PerfilDocente/EditarPerfil';
//Para editar el perfil
import { getUsuarioId } from '../service/apiUsuarios'
import { AuthContext } from '../auth/authContext';
import { SolicitudesRechazadas } from '../components/Docente/SolicitudesRechazadas/SolicitudesRechazadas';
import { CrearSolicitud } from '../components/Docente/crearSolicitud/CrearSolicitud';


export const DocenteRoutes = () => {
const{user}= useContext (AuthContext);
const [usuario, setUsuario ] = useState({
  state: false,
  data: []
});

const {state, data} = usuario;

var objeto={
  'nombreUsuario': data.name,
  'apellidoUsuario': data.apellido,
  'telefonoUsuario': data.telefonoUsuario,
  'direccionUsuario': data.direccionUsuario,
  'correoUsuario': data.email,
  'contraseñaUsuario': data.password,
  'contraseñaUsuarioConf': data.repeatPassword
}

useEffect(() => {
  
  }, [])

useEffect(() => {
  getUsuarioId(setUsuario,user.idDocente);
  localStorage.setItem('datos', JSON.stringify(objeto));

}, [state]);
    
    return (
        <>
            <NavBar>
                <ContenidoNavDocente/>
            </NavBar>
            <Routes>
                <Route exact path='home'                        element={<DocenteHome/>}/>
                <Route exact path='listarsolicitudes'           element={<VerSolicitudesDoc/>}/>
                <Route exact path='crearSolicitud'              element={<CrearSolicitud/>}/>
                <Route exact path='veraprobados'                element={<SolicitudesAprobadas/>}/>
                <Route exact path='registrarsolicitud'          element={<FormularioReservaAula/>} />
                <Route exact path='perfildocente'               element={<EditarPerfil nom={data.name} ape={data.apellido} tel={data.telefonoUsuario} dir={data.direccionUsuario} cor={data.email} con={data.password} conf={data.repeatPassword} />}/>
                {/* <Route exact path='editarscreen'                 element={<EditarScreen nom={data.name} ape={data.apellido} tel={data.telefonoUsuario} dir={data.direccionUsuario} cor={data.email} con={data.password} conf={data.repeatPassword}/>}/> */}
                <Route exact path='editarscreen'                 element={<EditarScreen/>}/>

                <Route exact path='verrechazados'                element={<SolicitudesRechazadas/>}/>

                <Route path='*'                                 element={<Error404Screen/>}/>
            </Routes>
        </>
        
    )
}
