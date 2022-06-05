import React, { useEffect, useState } from 'react'
import './estilosFormularioReserva.css'

import { controlarCampoNomDocente, controlarCampoApeDocente, controlarCampoCantidad, controlarCampoMotivo, controlarCampoPeriodo, validarCamposVaciosSolicitud, validarCamposLlenosSolicitud } from '../../helpers/validarForms';
import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';
import { ModalGenerico } from '../Modal/ModalGenerico';
import { AdvertenciaFormVacio } from '../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../Modal/Contenidos/Confirmacion';
import { Hecho } from '../Modal/Contenidos/Hecho';
import { ErrorGuardarDatos } from '../Modal/Contenidos/ErrorGuardarDatos';
import { MateriasDocente } from './MateriasDocente'
import { getMateria } from '../../service/apiMateria';
import { GruposDocente } from './GruposDocente';
import { getGrupoMateria } from '../../service/apiGrupoMaterias';

//Importacion de las APIs para la solicitud
import { getSolicitud, getSolicitudId, createSolicitud, updateSolicitudId, deleteSolicitud } from '../../service/apiSolicitudAulas';



export const FormularioReservaAula = ({
        
        nomDocente          ='', 
        apeDocente          ='', 
        cantEstudiantes     ='', 
        motSolicitud        ='',
        fecSolicitud        ='', 
        horSolicitud        ='',
        perSolicitud        ='',

        closeModal = () => {}, titulo='', idsolicitud='', setListaSolicitud
    }) => {

    const [formValues, handleInputChange, reset] = useForm({
       
        nombreDocente:          nomDocente,
        apellidoDocente:        apeDocente,
        cantidadEstudiantes:    cantEstudiantes,
        motivoSolicitud:        motSolicitud,
        fechaSolicitud:         fecSolicitud,
        peridoSolicitud:        perSolicitud,
        horaSolicitud:          horSolicitud,
        
    })

    const { nombreDocente, apellidoDocente, cantidadEstudiantes, motivoSolicitud, fechaSolicitud, horaSolicitud, peridoSolicitud} = formValues;

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
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);

    //controlar estados de select
    const [selects, setSelects] = useState('Registrar materia');
    const [selectsGrupos, setSelectsGrupos] = useState('Registrar grupo');
    //const [apellidoDocenteSolicitud, setapellidoDocenteSolicitud] = useState('');

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


    const validarForm = () => {
        if( validarCamposVaciosSolicitud(formValues) ){
            openModalFormVacio();
        }else {
            if( validarCamposLlenosSolicitud(formValues) ){
                openModalConfirm();
            }else {
                console.log(typeof(nombreDocente));
                console.log('logrado');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    //Para editar la solicitud y actualizar la tabla
    const editarSolicitud = (nomS, apeS, canS, motS, fecS, horS, perS, matS, gruS) => {
        const arregloSolicitud = dataS;

        let contador = 0;

        arregloSolicitud.map((solicitud) => {
            if( idsolicitud == solicitud.id ){
                arregloSolicitud[contador].nombreDocenteSolicitud       = nomS;
                arregloSolicitud[contador].apellidoDocenteSolicitud     = apeS;
                arregloSolicitud[contador].numeroEstudiantesSolicitud   = canS;
                arregloSolicitud[contador].motivoSolicitud              = motS;
                arregloSolicitud[contador].fechaSolicitud               = fecS;
                arregloSolicitud[contador].horaInicioSolicitud          = horS;
                arregloSolicitud[contador].periodoSolicitud             = perS;
                arregloSolicitud[contador].materiaSolicitud             = matS;
                arregloSolicitud[contador].grupoSolicitud               = gruS;
            }
            contador++;
        });
        setListaSolicitud({
            stateS: true,
            dataS: arregloSolicitud
        });
    }


    //Para enviar los datos del formulario 
    const guardarDatosFormulario = () => {
        setStatePetition(true);

        if( idsolicitud === '' ) {
            createSolicitud( formValues, '1', selects, selectsGrupos, 'pendiente', openModalSuccess, openModalWarning ); 
        }else {
            updateSolicitudId(formValues, '1', selects, selectsGrupos, 'pendiente', openModalSuccess, openModalWarning, idsolicitud);
            editarSolicitud(nombreDocente, apellidoDocente, cantidadEstudiantes, motivoSolicitud, fechaSolicitud, horaSolicitud, peridoSolicitud, selects, selectsGrupos)
        }
    }

    //Hook para obtener las solicitudes
    const [ListaSolicitud, setListaSolicitudes] = useState({
        stateS: false,
        dataS: []
    });

    const {stateS, dataS} = ListaSolicitud;

    useEffect(() => {
        getSolicitud(setListaSolicitudes);
    }, [stateS]);

    
    //Lista Materias
    const [listaMateria, setListaMateria] = useState({
        state: false,
        data: []
    });

    const {state, data} = listaMateria;

    useEffect(() => {
        getMateria(setListaMateria);
    }, [state]);



    //Obtener los grupos de materias y listarlas
    const [listaGrupos, setStateData] = useState({
        states: false,
        datas: []
    });

    const {states, datas} = listaGrupos;

    useEffect(() => {
        getGrupoMateria(setStateData);
    }, [states]);


    return (
        <div className='contenedor-reserva-aulas'>
            <h1 className="titulo-reserva-aulas">{titulo === ''? 'Reservar Aula' : `${titulo} Aula` }</h1>
            <form onSubmit={ handleSubmit } >
                <div className="contenedor-reserva">
                    <div className="contenedor-elementos-reserva-aulas">
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Nombre Docente:</label>
                            <div className='contenedor-inputs'>
                                <input 
                                    name='nombreDocente'
                                    className={ StatusInputNomDocente===true? "input-error" : "inputsSolicitud"} 
                                    type="text"
                                    placeholder='Ingresar Nombre'
                                    value={ nombreDocente }
                                    onChange={ handleInputChange }
                                    
                                ></input>
                                <p className={ StatusInputNomDocente===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorNomDocente }
                                </p>
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Apellido Docente:</label>
                            <div className='contenedor-inputs'>
                                <input
                                    name='apellidoDocente' 
                                    className={ StatusInputApeDocente===true? "input-error" : "inputsSolicitud" }
                                    type="text"
                                    placeholder='Ingresar Apellido'
                                    value={ apellidoDocente }
                                    onChange={ handleInputChange }
                                >      
                                </input>
                                <p className={ StatusInputApeDocente===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorApeDocente }
                                </p>
                                {/* <input value={apellidoDocenteSolicitud} onChange={event => setapellidoDocenteSolicitud(event.target.value)}></input> */}
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Materia: </label>
                            <div className='contenedor-inputs'>
                                <MateriasDocente data={data} selects={ selects } setSelects={ setSelects } />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Grupo(s): </label>
                            <div className='contenedor-inputs'>
                                <GruposDocente datas={datas} selectsGrupos={ selectsGrupos } setSelectsGrupos={ setSelectsGrupos } />
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Cantidad de Estudiantes: </label>
                            <div className='contenedor-inputs'>
                                <input 
                                    name='cantidadEstudiantes'
                                    className={ StatusInputCantidad===true? "input-error" : "inputsSolicitud" }
                                    type="number"
                                    placeholder='Cantidad Minima 5'
                                    value={ cantidadEstudiantes }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputCantidad===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorCantidad }
                                </p>
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Motivo de solicitud:</label>
                            <div className='contenedor-inputs'>
                                <textarea 
                                    name='motivoSolicitud'
                                    className={ StatusInputMotivo===true? "input-error" : "inputsSolicitud" }
                                    type="text"
                                    placeholder='Ingresar Motivo Solicitud'
                                    value={ motivoSolicitud }
                                    onChange= { handleInputChange }
                                ></textarea>
                                <p className={ StatusInputMotivo===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorMotivo }
                                </p>
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Fecha de Examen: </label>
                            <div className='contenedor-inputs'>
                                <input
                                    name='fechaSolicitud'
                                    className='inputsSolicitud'
                                    type="date"
                                    min="2022-06-07"
                                    // pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                    value={ fechaSolicitud }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Periodos:</label>
                            <div className='contenedor-inputs'>
                                <input 
                                    name='peridoSolicitud'
                                    className={ StatusInputPeriodo===true? "input-error" : "inputsSolicitud" }
                                    type="number"
                                    placeholder='Periodo minimo 1'
                                    value={ peridoSolicitud }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputPeriodo===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorPeriodo }
                                </p>
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Hora de Inicio: </label>
                            <div className='contenedor-inputs'>
                                <input 
                                    name='horaSolicitud'
                                    className="inputsSolicitud"
                                    type="time"
                                    value={ horaSolicitud }
                                    onChange={ handleInputChange }
                                ></input>
                            </div>
                        </div>
                        <div className="campos-reserva-aulas-estado">
                            <label className="labels"> Estado Solicitud: </label>
                            <div className='contenedor-inputs'>
                                <select 
                                    name='estadoSolicitud'
                                    id='estados'
                                    className="inputsSolicitud"  
                                                                   
                                >
                                    <option > Pendiente </option>
                                </select>
                            </div>
                        </div>

                        <div className="btns-reserva-aula">
                            <button 
                                className="btn boton-cancelar" 
                                type="button"
                                onClick={ nomDocente === ''? reset : closeModal}
                            >
                                Cancelar
                            </button>
                            <button 
                                className="btn boton-aceptar" 
                                type="button"
                                onClick={ validarForm }
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <ModalGenerico isOpen={ isOpenModalFormVacio } closeModal={ closeModalFormVacio } >
                <AdvertenciaFormVacio cerrarModal={ closeModalFormVacio } />
            </ModalGenerico>
        
            <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm }>
                <Confirmacion cerrarModal={ closeModalConfirm } funcGuardar={ guardarDatosFormulario } />
            </ModalGenerico>

            <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning } >
                <ErrorGuardarDatos cerrarModal={ closeModalWarning } />
            </ModalGenerico>

            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess } />
            </ModalGenerico>
        </div>
    )
}
