import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import { useModal } from '../../hooks/useModal';
import { ModalGenerico } from '../Modal/ModalGenerico';
import { RegSolicitud } from './RegistroSol/RegSolicitud';
//modal rechazo
import  ModalRechazo  from '../Modal/ModalRechazo';

import './estilos-ver-soli.css'


export const Solicitudes = ({data=[]}) => {

    const [values, setValues] = useState({
        nombreDocenteSolicitud:'',
        apellidoDocenteSolicitud:'',
        numeroEstudiantesSolicitud: '',
        motivoSolicitud:'',
        fechaSolicitud:'',
        horaInicioSolicitud:'',
        periodoSolicitud:'',
        estadoSolicitud:'',
        materia_id:''

    });

    const { nombreDocenteSolicitud,apellidoDocenteSolicitud,numeroEstudiantesSolicitud,motivoSolicitud,fechaSolicitud,horaInicioSolicitud,periodoSolicitud,estadoSolicitud,materia_id} = values;
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);
    //modal rechazo
    const[openModalRechazo,setOpenModalRechazo,closeModalRechazo]=useState(false);
 


    const actualizar = (item) => {
        setValues({
            nombreDocenteSolicitud: item.nombreDocenteSolicitud,
            apellidoDocenteSolicitud: item.apellidoDocenteSolicitud,
            numeroEstudiantesSolicitud: item.numeroEstudiantesSolicitud,
            motivoSolicitud: item.motivoSolicitud,
            fechaSolicitud: item.fechaSolicitud,
            horaInicioSolicitud: item.horaInicioSolicitud,
            periodoSolicitud: item.periodoSolicitud,
            estadoDolicitud: item.estadoSolicitud,
            materia_id: item.materia_id
        });
        openModalEdicion();
    }

    

    
    const guardarID  = (id) => {
        localStorage.setItem("id", id);
    }
//Modal rechazar



    return (
            <>
            <div className='contenedor-tabla'>
                <table>
                    <thead>
                        <tr className='titulo-tabla'>
                            <th>#</th>
                            <th>Nombre </th>
                            <th>Apellido Docente</th>
                            <th># de Estud.</th>
                            <th>Motivo</th>
                            <th>Fecha de Solicitud</th>
                            <th>Hora de Solicitud</th>
                            <th>Estado de Solicitud</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={item.id}>
                                    <td> { i+1 } </td>
                                    <td> { item.nombreDocenteSolicitud } </td>
                                    <td> { item.apellidoDocenteSolicitud } </td>
                                    <td> { item.numeroEstudiantesSolicitud } </td>
                                    <td> { item.motivoSolicitud } </td>
                                    <td> { item.fechaSolicitud } </td>
                                    <td> { item.horaInicioSolicitud } </td>
                                    <td> { item.estadoSolicitud } </td>
                                    <td className='td-btns'>
                                        <section className='caja-btns'>
                                            <button 
                                                className='btn-editar editar-mat'
                                                onClick={ () => {actualizar(item)} }
                                            >
                                                Detalles
                                            </button>
                                            <button 
                                                className='btn-editar rechazar-mat'
                                                onClick={ ()=>{setOpenModalRechazo(true);
                                                } }
                                            >
                                                    Rechazar
                                            </button>
                                            
                                        </section>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                isOpen &&
                <ModalGenerico isOpen={ isOpen } closeModal={closeModalEdicion}>
                    <RegSolicitud nombre_doc ={nombreDocenteSolicitud} 
                    ape_doc ={apellidoDocenteSolicitud} 
                    nro_est ={numeroEstudiantesSolicitud} 
                    motivo ={motivoSolicitud}
                    fecha_res ={fechaSolicitud}
                    hora_res ={horaInicioSolicitud}
                    periodo ={periodoSolicitud}
                    estado ={estadoSolicitud}
                    closeModal={closeModalEdicion} 
                    titulo='Detalles' 
                    materia_id={materia_id} />
                </ModalGenerico>
            }
            {openModalRechazo && 
            <ModalGenerico  isOpen={openModalRechazo} closeModal={closeModalRechazo}>
            <ModalRechazo closeModal={setOpenModalRechazo}/> 
            </ModalGenerico>
            }
            </>
    )
}
