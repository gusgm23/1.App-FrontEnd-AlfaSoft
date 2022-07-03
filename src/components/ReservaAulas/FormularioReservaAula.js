import React, { useContext, useEffect, useState } from 'react'
import './estilosFormularioReserva.css'

import { controlarCampoCantidad, controlarCampoPeriodo, validarCamposVaciosSolicitud, validarCamposLlenosSolicitud } from '../../helpers/validarForms';
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
import { getSolicitud, createSolicitud, updateSolicitudId } from '../../service/apiSolicitudAulas';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { AuthContext } from '../../auth/authContext';
import { obtenerGrupos, obtenerMaterias } from '../../helpers/metodosDeFormularioReserva';
import { Spinner } from 'react-bootstrap';




export const FormularioReservaAula = ({
        
        nomDocente          ='', 
        apeDocente          ='', 
        cantEstudiantes     ='', 
        // motRechazo          ='', 
        horSolicitud        ='',
        perSolicitud        ='',

        closeModal = () => {}, titulo='', idsolicitud='', dataOptenida, setListaSolicitud }) => {

    const [formValues, handleInputChange, reset] = useForm({
       
        nombreDocente:          nomDocente,
        apellidoDocente:        apeDocente,
        cantidadEstudiantes:    cantEstudiantes,
        // motvioRechazo:          motRechazo,
        peridoSolicitud:        perSolicitud,
        selectHora:             horSolicitud,
    })

    const { cantidadEstudiantes, peridoSolicitud } = formValues;

    const { user } = useContext(AuthContext);

    //hooks para controlar contenidos de campos
    const [StatusInputMateria, setStatusInputMateria] = useState(false);
    const [StatusInputGrupo, setStatusInputGrupo] = useState(false);
    const [StatusInputCantidad, setStatusInputCantidad] = useState(false);
    const [StatusInputMotivo, setStatusInputMotivo] = useState(false);
    const [StatusInputHora, setStatusInputHora] = useState(false);
    const [StatusInputPeriodo, setStatusInputPeriodo] = useState(false);

    //Hooks para mostrar el mensaje de error en los campos
    const [MsjErrorCantidad, setMsjErrorCantidad] = useState('');
    const [MsjErrorPeriodo, setMsjErrorPeriodo] = useState('');

    //Hooks para el estado de las peticiones de la solicitud
    const [StatePetition, setStatePetition] = useState(false);

    //Hooks para controlar modales
    const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] = useModal(false);
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);

    //controlar estados de select
    const [selects, setSelects] = useState('MateriaVacia');
    const [selectsGrupos, setSelectsGrupos] = useState('GrupoVacio');
    const [selectMotivo, setSelectMotivo] = useState('Vacio');
    const [selectHora, setSelectHora] = useState('HoraVacia');

    useEffect(() => {
        if(selects === 'MateriaVacia'){
            setStatusInputMateria(true);
        }else{
            setStatusInputMateria(false);
        }
    }, [selects])

    useEffect(() => {
        if(selectsGrupos === 'GrupoVacio'){
            setStatusInputGrupo(true);
        }else{
            setStatusInputGrupo(false);
        }
    }, [selectsGrupos])

    useEffect(() => {
        if( cantidadEstudiantes === '' ){
            setStatusInputCantidad(false);
        }else{
            controlarCampoCantidad( cantidadEstudiantes, setStatusInputCantidad, setMsjErrorCantidad );
        }
    }, [cantidadEstudiantes])

    useEffect(() => {
        if( selectMotivo === 'Vacio' ){
            setStatusInputMotivo(true);
        }else{
            setStatusInputMotivo(false);
        }
    }, [selectMotivo])

    useEffect(() => {
        if( selectHora === 'HoraVacia' ){
            setStatusInputHora(true);
        }else{
            setStatusInputHora(false);
        }
    }, [selectHora])

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
            if( validarCamposLlenosSolicitud(formValues, selectMotivo ,selectHora) ){
                openModalConfirm();
            }else {
                console.log(typeof(nombreDocente));
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    //Para editar la solicitud y actualizar la tabla
    const editarSolicitud = (nomS, apeS, canS,motR, fecS, perS, matS, gruS) => {
        const arregloSolicitud = dataS;

        let contador = 0;

        arregloSolicitud.map((solicitud) => {
            if( idsolicitud === solicitud.id ){
                arregloSolicitud[contador].nombreDocenteSolicitud       = nomS;
                arregloSolicitud[contador].apellidoDocenteSolicitud     = apeS;
                arregloSolicitud[contador].numeroEstudiantesSolicitud   = canS;
                arregloSolicitud[contador].motivoSolicitud              = selectMotivo;
                arregloSolicitud[contador].motivoRechazo                = motR;
                arregloSolicitud[contador].fechaSolicitud               = fecS;
                arregloSolicitud[contador].horaInicioSolicitud          = selectHora;
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
            createSolicitud( formValues, '1', selects, selectsGrupos, selectMotivo, JSON.stringify(fechaSolicitud).substring(1,11), selectHora, 'pendiente','ninguno', '0', user.name, user.apellido, openModalSuccess, openModalWarning ); 
        }else {
            updateSolicitudId(formValues, '1', selects, selectsGrupos, selectMotivo, JSON.stringify(fechaSolicitud).substring(1,11), selectHora, 'pendiente','ninguno', '0', user.name, user.apellido, openModalSuccess, openModalWarning, idsolicitud);
            editarSolicitud(user.name, user.apellido, cantidadEstudiantes, selectMotivo, fechaSolicitud, selectHora, peridoSolicitud, selects, selectsGrupos)
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

    //Obtener los grupos de materias y listarlas
    const [listaGrupos, setStateData] = useState([]);

    const [listaMateriasDocente, setListaMateriasDocente] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [listaGruposDocente, setListaGruposDocente] = useState([]);

    useEffect(() => {
        getMateria(setListaMateria);
        getGrupoMateria(setStateData);
    }, []);

    useEffect(() => {
        setListaMateriasDocente(obtenerMaterias(data, listaGrupos.data, user.idDocente))  
        setIsLoading (false)
    },[data, listaGrupos.data])

    useEffect(() => {
        setListaGruposDocente(obtenerGrupos(listaGrupos.data, data, selects, user.idDocente))
    }, [selects])
    
    const navegar = useNavigate();

    const volverAtrasSolicitud = () => {
        navegar(-1);
    }

    //Invalidar dias del calendario
    const [ fechaSolicitud, setfechaSolicitud ] = useState(null);

        
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 0;
        let prevYear = (prevMonth === 11) ? year - 1 : year;

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);


        let invalidDates = [today];

        addLocale('en', {
            firstDayOfWeek: 1,
            dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            today: 'Hoy',
            clear: 'Limpiar'
        });

        // const horaSolicitud = document.getElementById('horaInicio');
        // const opcionHora = horaSolicitud.options[horaSolicitud.selectedIndex].value;
        // alert(opcionHora);

    return (
        <div className='contenedor-reserva-aulas'>
            
      {isLoading && <Spinner />}
            <h1 className="titulo-reserva-aulas">{titulo === ''? 'Solicitud de Reserva de Aula' : `${titulo} Solicitud de Reserva` }</h1>
            {

               listaMateria.state &&
                 listaMateriasDocente.length > 0
                

                ? 

                
            
            <form onSubmit={ handleSubmit } >
                <div className="contenedor-reserva">
                    <div className="contenedor-elementos-reserva-aulas">
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Materia: </label>
                            <div className='contenedor-inputs'>
                                <MateriasDocente data={listaMateriasDocente} selects={ selects } setSelects={ setSelects } />
                                <p className={ StatusInputMateria ? "mensaje-error" : "mensaje-error-oculto" }>
                                    Debe seleccionar una materia.
                                </p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Grupo(s): </label>
                            <div className='contenedor-inputs'>
                                <GruposDocente datas={listaGruposDocente} selectsGrupos={ selectsGrupos } setSelectsGrupos={ setSelectsGrupos } />
                                <p className={ StatusInputGrupo ? "mensaje-error" : "mensaje-error-oculto" }>
                                    Debe seleccionar primero una materia y luego el grupo.
                                </p>
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
                                <select 
                                    name='motivoSolicitud' 
                                    className='inputsSolicitud' 
                                    value={selectMotivo}
                                    onChange={e => setSelectMotivo(e.target.value)}
                                    selectMotivo={ selectMotivo }
                                    setSelectMotivo={ setSelectMotivo }
                                > 
                                    <option value='Vacio'> Seleccionar motivo.</option>
                                    <option value='Examen Primer Parcial'> Examen Primer Parcial </option>
                                    <option value='Examen Segundo Parcial'> Examen Segundo Parcial </option>
                                    <option value='Examen Final'> Examen Final </option>
                                    <option value='Examen Segunda Instancia'> Examen Segunda Instancia </option>
                                    <option value='Examen de Mesa 1ra Opción'> Examen de Mesa 1ra Opción </option>
                                    <option value='Examen de Mesa 2ra Opción'> Examen de Mesa 2ra Opción </option>
                                </select>
                                <p className={ StatusInputMotivo ? "mensaje-error" : "mensaje-error-oculto"}>
                                    Debe seleccionar un motivo.
                                </p>
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Fecha de Examen: </label>
                            <div className='contenedor-inputsFecha'>
                                {/* <input name='fechaSolicitud' className='inputsSolicitud' type="date" min={disableDates} value={ fechaSolicitud } onChange={ handleInputChange } /> */}
                                <Calendar 
                                    id="disableddays"
                                    name='fechaSolicitud'
                                    className="inputsSolicitud"
                                    placeholder='Seleccionar fecha.'
                                    dateFormat="dd/mm/yy"
                                    value={ fechaSolicitud }
                                    onChange={ (e) => setfechaSolicitud(e.value) }
                                    disabledDates={invalidDates} 
                                    disabledDays={[0]}
                                    minDate={minDate}
                                    showIcon 
                                    readOnlyInput 
                                />
                            </div>
                        </div>
                        <div className="campos-reserva-aulas">
                        <label className="labels"> Hora de Inicio: </label>
                            <div className='contenedor-inputs'>
                                <select 
                                    id='horaInicio'
                                    name='horaSolicitud'
                                    className="inputsSolicitud"
                                    value={ selectHora }
                                    onChange={ e => setSelectHora(e.target.value) }
                                    selectHora={ selectHora }
                                    setSelectHora={ setSelectHora }
                                >
                                    <option value='HoraVacia'> Seleccionar hora. </option>
                                    <option value='06:45:00'> 06:45:00 </option>
                                    <option value='08:15:00'> 08:15:00 </option>
                                    <option value='09:45:00'> 09:45:00 </option>
                                    <option value='11:15:00'> 11:15:00 </option>
                                    <option value='12:45:00'> 12:45:00 </option>
                                    <option value='14:15:00'> 14:15:00 </option>
                                    <option value='15:45:00'> 15:45:00 </option>
                                    <option value='17:15:00'> 17:15:00 </option>
                                    <option value='18:45:00'> 18:45:00 </option>
                                    <option value='20:15:00'> 20:15:00 </option>
                                </select>
                                <p className={ StatusInputHora ? "mensaje-error" : "mensaje-error-oculto"}>
                                    Debe seleccionar una hora.
                                </p>
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

                        <div className="btns-reserva-aula">
                            <button 
                                className="btn boton-cancelar" 
                                type="button"
                                onClick={ nomDocente === ''? volverAtrasSolicitud : closeModal}
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
            : <p className='parrafoMateriasDocenteVacio'> No tienes materias asignadas para hacer una solicitud. Debes esperar que el administrador te asigne una materia. </p>
            }

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
                <Hecho cerrarModal={ closeModalSuccess } funcResetSol={reset} />
            </ModalGenerico>
        </div>
    )
}
