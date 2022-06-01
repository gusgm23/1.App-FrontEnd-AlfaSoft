import React, { useEffect, useState } from "react";
import { getSolicitud } from "../../../service/apiSolicitudAulas";
import {Solicitudes} from './SolicitudesDoc';
import './listarSolicitudes.css';
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import Spinner from "../../Spinner/Spinner";
import { RegistroUsuarios } from "../../RegistroUsuarios/RegistroUsuarios";
import { FormularioReservaAula } from "../FormularioReservaAula";
import { filtrarSolicitudes } from "../../../helpers/filtrarSolicitudes";



export const VerSolicitudesDoc = () => {

    const [ isOpenModalCreate, openModalCreate, closeModalCreate ] = useModal(false);

    const [ListaSolicitud, setListaSolicitud] = useState({
        stateS: false,
        dataS: []
    });

    const {stateS, dataS} = ListaSolicitud;

    const [dataSolicitud, setdataSolicitud] = useState([]);
    const idmateria = localStorage.getItem("id");

    useEffect(() => {
        if(dataS != []) {
            getSolicitud(setListaSolicitud);
            filtrarSolicitudes(dataS, idmateria, setdataSolicitud);
        }
    }, [stateS]);

    return (
        <div className="contenedor-general-versolicitudes">
            <div className="contenedor-elementos-versolicitudes">
                <div className="contenedor-titulo-botonSolicitud">
                    <h2 className="titulo-ver-solicitud"> Lista de Solicitudes: {dataS.length} </h2>
                    <div className="contenedor-botones-solicitud">
                        <button 
                            className="boton-crear-solicitudes"
                            onClick={openModalCreate}
                        >
                            <i className="bi bi-plus-square-fill"></i>
                        </button>
                    </div>
                </div>
                <hr/>
                {
                    stateS ?
                    <Solicitudes data={dataS} setListaSolicitud={setListaSolicitud} />
                    : <Spinner/>
                }
            </div>
            <ModalGenerico isOpen={isOpenModalCreate} closeModal={closeModalCreate}>
                <FormularioReservaAula
                    closeModalCreate={closeModalCreate}
                    titulo='Registrar'
                    dataSolicitud={dataS}
                    setdataSolicitud={setListaSolicitud}
                />
            </ModalGenerico>
        </div>
    )
}