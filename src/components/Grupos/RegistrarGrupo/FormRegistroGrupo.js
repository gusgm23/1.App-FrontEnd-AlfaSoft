import React, { useEffect, useState } from 'react'
import { obtenerAuxiliares, obtenerDocentes } from '../../../helpers/obtenerTiposDeUsuarios';
import { controlarCampoGrupo, validaCamposVaciosGrupo, validarCamposLlenosGrupo, verificarExistenciaGrupo } from '../../../helpers/validarForms';
import { useForm } from '../../../hooks/useForm';
import { useModal } from '../../../hooks/useModal';
import { createGrupoMateria, getGrupoMateria, updateGrupoMateriaId } from '../../../service/apiGrupoMaterias';
import { getUsuariosHabilitados } from '../../../service/apiUsuarios';
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio';
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion';
import { ErrorGuardarDatos } from '../../Modal/Contenidos/ErrorGuardarDatos';
import { GrupoExiste } from '../../Modal/Contenidos/GrupoExiste';
import { Hecho } from '../../Modal/Contenidos/Hecho';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { ListaAuxiliares } from './ListaAuxiliares';
import { ListaDocentes } from './ListaDocentes';

export const FormRegistroGrupo = ({ idEdit='', grupoEdit='', titulo='', closeModal = () => {}, closeModalCreate = () => {}, dataLimpia, setDataLimpia }) => {

    

    const [ formValues, handleInputChange, reset ] = useForm({
        id: idEdit,
        grupo: grupoEdit
    });
    const { id, grupo } = formValues;

    const [listaGrupos, setListaABuscar] = useState({})

    const [usuarios, setUsuarios] = useState({
        states: false,
        datas: []
    })
    const { states, datas } = usuarios;

    const [tipoUsuarios, setTipoUsuarios] = useState({
        docentes: [],
        auxiliares: []
    })

    const { docentes, auxiliares } = tipoUsuarios;

    //Hooks par controlar Modales
    const [isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio] = useModal(false);
    const [isOpenModalWarning, openModalWarning, closeModalWarning] = useModal(false);
    const [isOpenModalSuccess, openModalSuccess, closeModalSuccess] = useModal(false);
    const [isOpenModalGroupExist, openModalGroupExist, closeModalGroupExist] = useModal(false);

    //Hooks para controlar contenido de campo grupo
    const [StatusInputGrupo, setStatusInputGrupo] = useState(false);
    const [existeGrupo, setExisteGrupo] = useState(false);

    //!Hook para controlar campo Docente
    const [StatusInputDocente, setStatusInputDocente] = useState(false);

    //Hooks para mostrar mensajes de errores en los campos respectivos
    const [MsjErrorGroup, setMsjErrorGroup] = useState('');

    //!Hook para activar peticion a los grupos
    const [hacerPeticion, setHacerPeticion] = useState(false);

    useEffect(() => {
    
        if(hacerPeticion){
            getGrupoMateria(setListaABuscar);
        }

    }, [hacerPeticion])
    

    //!Hook para controlar estado de Combobox de estado de grupo
    const [selects, setSelects] = useState('Habilitado');

    //!Hook para controlar estado de Combobox de docentes
    const [selectDocente, setSelectDocente] = useState('Vacio');

    //!Hook para controlar estado de Combobox de auxiliares
    const [selectAuxiliar, setSelectAuxiliar] = useState('No asignado');

    useEffect(() => {
        
        getUsuariosHabilitados(setUsuarios);

    }, [])

    useEffect(() => {

        setTipoUsuarios({
            docentes: obtenerDocentes(datas),
            auxiliares: obtenerAuxiliares(datas)
        });
        
    }, [datas])
    
    useEffect(() => {
        if( grupo === '' ){
            setStatusInputGrupo(false);
        }else{
            controlarCampoGrupo( grupo, setStatusInputGrupo, setMsjErrorGroup );
        }

    }, [grupo])

    useEffect(() => {
        if(selectDocente === 'Vacio'){
            setStatusInputDocente(true);
        }else{
            setStatusInputDocente(false);
        }
    }, [selectDocente])

    const validarForm = () => {
        if( validaCamposVaciosGrupo(formValues, selectDocente) ){
            openModalFormVacio();
        }else{

            if( validarCamposLlenosGrupo(formValues) && !existeGrupo ){
                guardarDatos();
            }else{
                console.log('no cumple');
            }
        }
    }

    const nuevoGrupo = ( newID, newGroup, newEstado, materiaID ) => {
        const grupo = {
            id:newID,
            grupoMateria: newGroup,
            idDocente: selectDocente,
            idAuxiliar: selectAuxiliar,
            estadoGrupoMateria: newEstado,
            materia_id: materiaID
        }

        const lista = dataLimpia;
        lista.push(grupo);

        setDataLimpia(lista);

    }

    //!Metodo para editar un grupo y luego la tabla se actualice
    const editarMateria = (id, nuevoGrupo, nuevoEstado) => {

        const arreglo = dataLimpia;
        
        let contador = 0;

        arreglo.map((materia) => {
            
            if(id == materia.id){
                arreglo[contador].grupoMateria = nuevoGrupo;
                arreglo[contador].idDocente = selectDocente;
                arreglo[contador].idAuxiliar = selectAuxiliar;
                arreglo[contador].estadoGrupoMateria = nuevoEstado;
            }
            contador++;
        });

        setDataLimpia(arreglo);
    }

    const guardarDatos = () => {

        const idMat = localStorage.getItem('id');

        if( !verificarExistenciaGrupo(dataLimpia, grupo, selectDocente, idEdit, grupoEdit) && selectDocente !== 'Vacio' ){

            if(titulo === 'Registrar'){
            
                createGrupoMateria(grupo, selects, idMat, selectDocente, selectAuxiliar, openModalSuccess, openModalWarning);    
                nuevoGrupo(dataLimpia.length+10, grupo, selects, idMat);
    
            }else{
    
                updateGrupoMateriaId(grupo, selects, idMat, selectDocente, selectAuxiliar, openModalSuccess, openModalWarning, idEdit);
                editarMateria(idEdit, grupo, selects);
    
            }
        }else{
            openModalGroupExist();
        }

    }

    return (
        <div className='contenedor-registro-aula form-registro-aula'>
            <h2 className='titulo-registro-aula'> { titulo === 'Registrar'? 'Registrar grupo' : titulo } </h2>
            
                <div className='contenedor-general'>
                    <div className='contenedor-elementos'>
                        <div className='contenedor-flex-registrar-grupo'>
                            <label className='labels'>Grupo:</label>
                            <div className='contenedor-input-crear-grupo'>
                                <input
                                    name='grupo'
                                    className={ StatusInputGrupo===true? "input-error-crear-grupo": "input-crear-grupo" }
                                    type='text'
                                    placeholder='6A'
                                    value={ grupo }
                                    onChange={ handleInputChange }
                                    autoComplete='off'
                                />
                                <p className={ StatusInputGrupo===true? "msj-error": "msj-error-oculto" }>
                                    { MsjErrorGroup }
                                </p>
                                <p className={ existeGrupo===true? "msj-error": "msj-error-oculto" }>
                                    { 'El Grupo que deseas crear ya existe.' }
                                </p>
                            </div>
                            <div className='contenedor-flex-grupo'>
                                <label className='labels'>Docente:</label>
                                <ListaDocentes listaDocentes={ docentes } selects={ selectDocente } setSelects={ setSelectDocente }/>
                                <p className={ StatusInputDocente ? 'msj-error' : 'msj-error-oculto' }>
                                    Debes asignar un docente.
                                </p>
                            </div>
                            <div className='contenedor-flex-grupo'>
                                <label className='labels'>Auxiliar:</label>
                                <ListaAuxiliares listaAuxiliares={ auxiliares } selects={ selectAuxiliar } setSelects={ setSelectAuxiliar }/>
                            </div>
                            <div className='contenedor-flex-grupo'>
                                <label className='labels'>Estado:</label>
                                <select className='inputs' value={ selects } onChange={ e => setSelects(e.target.value) }>
                                    <option >Habilitado</option>
                                    <option>Deshabilitado</option>
                                </select>
                            </div>
                        </div>
                        <div className='contenedor-botones'>
                            <button
                                className='btn btn-warning btn-form-crear-grupo'
                                onClick={ 
                                    titulo === 'Registrar' ? () => { closeModalCreate(); reset() } : closeModal
                                }
                            >
                                Cancelar
                            </button>
                            <button 
                                className='btn btn-primary btn-form-crear-grupo'
                                onClick={ validarForm }
                            >
                                {titulo === 'Registrar'? 'Crear' : 'Actualizar'}
                            </button>
                        </div>
                    </div>
                </div>
            
            <ModalGenerico isOpen={ isOpenModalFormVacio } closeModal={ closeModalFormVacio }>
                <AdvertenciaFormVacio cerrarModal={ closeModalFormVacio }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning }>
                <ErrorGuardarDatos cerrarModal={ closeModalWarning }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess } funcReset={reset}/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalGroupExist } closeModal={ closeModalGroupExist }>
                <GrupoExiste cerrarModal={ closeModalGroupExist }/>
            </ModalGenerico>
        </div>
    )
}
