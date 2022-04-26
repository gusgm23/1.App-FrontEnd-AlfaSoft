import React, { useEffect, useState } from 'react'
import './estilosFormularioReserva.css'

import { controlarCampoNomDocente, controlarCampoApeDocente, controlarCampoCantidad, controlarCampoMotivo, controlarCampoPeriodo } from '../../helpers/validarForms';
import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';
import { ModalGenerico } from '../Modal/ModalGenerico';
import { AdvertenciaFormVacio } from '../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../Modal/Contenidos/Confirmacion';

//Importacion de las APIs para la solicitud
import { getSolicitud, getSolicitudId, createSolicitud, updateSolicitudId, deleteSolicitud } from '../../service/apiSolicitudAulas';


export const FormularioReservaAula = ({ 
        nomDocente          ='', 
        apeDocente          ='', 
        cantEstudiantes     ='', 
        motSolicitud        ='',
        fecSolicitud        ='', 
        perSolicitud        ='',
        closeModal = () => {}, idsolicitud=''
    }) => {

    const [formValues, handleInputChange, reset] = useForm({
        nombreDocente:          nomDocente,
        apellidoDocente:        apeDocente,
        cantidadEstudiantes:    cantEstudiantes,
        motivoSolicitud:        motSolicitud,
        fechaSolicitud:         fecSolicitud,
        peridoSolicitud:        perSolicitud,

    })

    const { nombreDocente, apellidoDocente, cantidadEstudiantes, motivoSolicitud, fechaSolicitud, peridoSolicitud } = formValues;

    //hooks para controlar contenidos de campos
    const [StatusInputNomDocente, setStatusInputNomDocente] = useState(false);
    const [StatusInputApeDocente, setStatusInputApeDocente] = useState(false);
    const [StatusInputCantidad, setStatusInputCantidad] = useState(false);
    const [StatusInputMotivo, setStatusInputMotivo] = useState(false);
    const [StatusInputPeriodo, setStatusInputPeriodo] = useState(false);

    //Hooks para mostrar el mensaje de error en los campos
    const [MsjErrorNomDocente, setMsjErrorNomDocente] = useState('');
    const [MsjErrorApeDocente, setMsjErrorApeDocente] = useState('');
    const [MsjErrorCantidad, setMsjErrorCantidad] = useState('');
    const [MsjErrorMotivo, setMsjErrorMotivo] = useState('');
    const [MsjErrorPeriodo, setMsjErrorPeriodo] = useState('');

    //Hooks para el estado de las peticiones de la solicitud
    const [StatePetition, setStatePetition] = useState(false);

    //Hooks para controlar modales
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);

    useEffect(() => {
        if( nombreDocente === ''){
            setStatusInputNomDocente(false);
        }else{
            controlarCampoNomDocente( nombreDocente, setStatusInputNomDocente, setMsjErrorNomDocente);
        }
    }, [nombreDocente])

    useEffect(() => {
        if( apellidoDocente === ''){
            setStatusInputApeDocente(false);
        }else{
            controlarCampoApeDocente( apellidoDocente, setStatusInputApeDocente, setMsjErrorApeDocente);
        }
    }, [apellidoDocente])

    useEffect(() => {
        if( cantidadEstudiantes === '' ){
            setStatusInputCantidad(false);
        }else{
            controlarCampoCantidad( cantidadEstudiantes, setStatusInputCantidad, setMsjErrorCantidad );
        }
    }, [cantidadEstudiantes])

    useEffect(() => {
        if( motivoSolicitud === '' ){
            setStatusInputMotivo(false);
        }else{
            controlarCampoMotivo( motivoSolicitud, setStatusInputMotivo, setMsjErrorMotivo );
        }
    }, [motivoSolicitud])

    useEffect(() => {
        if( peridoSolicitud === ''){
            setStatusInputPeriodo(false);
        }else {
            controlarCampoPeriodo( peridoSolicitud, setStatusInputPeriodo, setMsjErrorPeriodo );
        }
    }, [peridoSolicitud])

    const guardarDatosFormulario = () => {
        setStatePetition(true);

        const seleccion = document.getElementById('estados');
        const itemSeleccionado = seleccion.options[ seleccion.selectedIndex ].value;

        if( idsolicitud === '' ) {
            createSolicitud( formValues, '1', itemSeleccionado );
        }
    }

    return (
        <div className="contenedor-reserva-aulas">
            <h2 className="titulo-reserva-aulas"> Reservar Aula </h2>
            <form>
                <div className="contenedor-reserva">
                    <div className="contenedor-elementos-reserva-aulas">
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Nombre Docente:</label>
                            <input 
                                name='nombreDocente'
                                className={ StatusInputNomDocente===true? "input-error" : "inputs"} 
                                type="text"
                                placeholder='Ingresar Nombre'
                                value={ nombreDocente }
                                onChange={ handleInputChange }
                            ></input>
                            <p className={ StatusInputNomDocente===true? "mensaje-error" : "mensaje-error-oculto" }>
                                { MsjErrorNomDocente }
                            </p>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Apellido Docente:</label>
                            <input
                                name='apellidoDocente' 
                                className={ StatusInputApeDocente===true? "input-error" : "inputs" }
                                type="text"
                                placeholder='Ingresar Apellido'
                                value={ apellidoDocente }
                                onChange={ handleInputChange }
                            ></input>
                            <p className={ StatusInputApeDocente===true? "mensaje-error" : "mensaje-error-oculto" }>
                                { MsjErrorApeDocente }
                            </p>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Materia: </label>
                            <select 
                                className="inputs" 
                                //type='text'
                                placeholder='Elegir Materia.'
                            >
                                <option >Algebra I</option>
                                <option >Calculo I</option>
                                <option >Fisica I</option>
                            </select>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Grupo(s): </label>
                            <select 
                                className="inputs" 
                                //type="number"
                                placeholder='Elegir Grupo.'
                            >
                                <option >Grupo 1</option>
                                <option >Grupo 2</option>
                            </select>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Cantidad de Estudiantes: </label>
                            <input 
                                name='cantidadEstudiantes'
                                className={ StatusInputCantidad===true? "input-error" : "inputs" }
                                type="number"
                                placeholder='Cantidad Minima 5'
                                value={ cantidadEstudiantes }
                                onChange={ handleInputChange }
                            ></input>
                            <p className={ StatusInputCantidad===true? "mensaje-error" : "mensaje-error-oculto" }>
                                { MsjErrorCantidad }
                            </p>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Motivo de solicitud:</label>
                            <textarea 
                                name='motivoSolicitud'
                                className={ StatusInputMotivo===true? "input-error" : "inputs" }
                                type="text"
                                placeholder='Ingresar Motivo Solicitud'
                                value={ motivoSolicitud }
                                onChange= { handleInputChange }
                            ></textarea>
                            <p className={ StatusInputMotivo===true? "mensaje-error" : "mensaje-error-oculto" }>
                                { MsjErrorMotivo }
                            </p>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Fecha de Examen: </label>
                            <input
                                name='fechaSolicitud'
                                className='inputs'
                                type="date"
                                min="2022-04-26"
                                value={ fechaSolicitud }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Periodos:</label>
                            <input 
                                name='peridoSolicitud'
                                className={ StatusInputPeriodo===true? "input-error" : "inputs" }
                                type="number"
                                placeholder='Periodo minimo 1'
                                value={ peridoSolicitud }
                                onChange={ handleInputChange }
                            ></input>
                            <p className={ StatusInputPeriodo===true? "mensaje-error" : "mensaje-error-oculto" }>
                                { MsjErrorPeriodo }
                            </p>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Hora de Inicio: </label>
                            <input className="inputs"type="time"></input>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Hora Final: </label>
                            <input className="inputs"type="time"></input>
                        </div>

                    </div>
                    <div className="btns-reserva-aula">
                        <button className="boton-cancelar" type="button">
                            Cancelar
                        </button>
                        <button className="boton-aceptar" type="button">
                            Aceptar
                        </button>
                    </div>
                </div>
            </form>
            <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm }>
                <Confirmacion cerrarModal={ closeModalConfirm } funcGuardar={ guardarDatosFormulario } />
            </ModalGenerico>
        </div>
    )
}
