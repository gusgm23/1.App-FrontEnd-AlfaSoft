import React, { useContext, useEffect, useState } from "react";
import { getSolicitud } from "../../../service/apiSolicitudAulas";
import {Solicitudes} from './SolicitudesDoc';
import './listarSolicitudes.css';
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import Spinner from "../../Spinner/Spinner";
import { FormularioReservaAula } from "../FormularioReservaAula";
import { filtrarSolicitudes } from "../../../helpers/filtrarSolicitudes";
import { AuthContext } from "../../../auth/authContext";
import { getSolicitudesDeUsuario } from "../../../helpers/obtenerSolicitudesDeUsuario";
import { useNavigate } from "react-router-dom";



export const VerSolicitudesDoc = () => {

    const { user } = useContext(AuthContext);

    const [ isOpenModalCreate, openModalCreate, closeModalCreate ] = useModal(false);

    const [ListaSolicitud, setListaSolicitud] = useState({
        stateS: false,
        dataS: []
    });

    const {stateS, dataS} = ListaSolicitud;

    const [dataSolicitud, setdataSolicitud] = useState([]);
    const [solicitudesUsuario, setSolicitudesUsuario] = useState({
        stateSolcitudesUsuario: false,
        dataSolicitudesUsuario: []
    })
    const {stateSolcitudesUsuario, dataSolicitudesUsuario} = solicitudesUsuario;

    const idmateria = localStorage.getItem("id");
    

    useEffect(() => {
        if(dataS != []) {
            getSolicitud(setListaSolicitud);
            filtrarSolicitudes(dataS, idmateria, setdataSolicitud);
        }

        if(stateS) {
            setSolicitudesUsuario({
                stateSolcitudesUsuario: true,
                dataSolicitudesUsuario: getSolicitudesDeUsuario(dataS, user.name, user.apellido)
            });
        }

    }, [stateS]);

    console.log(dataSolicitudesUsuario, "asdada");

    const navegar = useNavigate();

    const navegarRegistroSolicitud = () => {
        navegar('/docente/registrarsolicitud')
    }

    return (
        <div className="contenedor-general-versolicitudes">
            <div className="contenedor-elementos-versolicitudes">
                <div className="contenedor-titulo-botonSolicitud">
                    <h2 className="titulo-ver-solicitud mrg-der-titulo"> Lista de solicitudes pendientes: {dataSolicitudesUsuario.length} </h2>
                    <div className="contenedor-botones-solicitud">
                        <button 
                            className="boton-crear-solicitudes"
                            onClick={navegarRegistroSolicitud}
                        >
                            <i className="bi bi-plus-square-fill"></i>
                        </button>
                    </div>
                </div>
                <hr/>
                {
                    stateSolcitudesUsuario
                    ? dataSolicitudesUsuario.length > 0
                        ? <Solicitudes data={dataSolicitudesUsuario} setListaSolicitud={setListaSolicitud} />
                        : <p className="parraf-solicitudes-vacias">No existen solicitudes pendientes.</p>
                    : <Spinner/>
                }
            </div>
        </div>
    )
}