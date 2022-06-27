
import React, { useState, useEffect } from 'react';
import { useModal } from '../../../hooks/useModal';
import './listarSolicitudes.css';
import {getSolicitud} from '../../../service/apiSolicitudAulas';
import { FormularioReservaAula } from '../FormularioReservaAula';
import CamposTablaSolicitud from './CamposTablaSolicitud';

import { ModalGenerico } from '../../Modal/ModalGenerico';


export const Solicitudes = ({data=[], setListaSolicitud}) => {

    const [Valores, setValores] = useState({
        id:                     '',
        nombreSoli:             '',
        apellidoSoli:           '',
        numeroSoli:             '',
        motivoSoli:             '',
        fechaSoli:              '',
        horaSol:                '',
        periodoSoli:            '',
        estadoSoli:             '',
        materiaSoli:            '',
        grupoSoli:              '',
    });

    const { id,           
            nombreSoli,   
            apellidoSoli, 
            numeroSoli,   
            motivoSoli,   
            fechaSoli,    
            horaSol,      
            periodoSoli,  
            estadoSoli,   
            materiaSoli,  
            grupoSoli,     
        } = Valores;

    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);
    const [ isOpenModalConfirm, openModalConfirm, closeModalConfirm ] = useModal(false); 

    const [dataSolicitud, setdataSolicitud] = useState([]);


    //Para mostrar los campos en la tabla 
    const actualizarSolicitud = (item) => {
        setValores({
            id:             item.id,                       
            nombreSoli:     item.nombreDocenteSolicitud,    
            apellidoSoli:   item.apellidoDocenteSolicitud,  
            numeroSoli:     item.numeroEstudiantesSolicitud,
            motivoSoli:     item.motivoSolicitud,          
            fechaSoli:      item.fechaSolicitud,            
            horaSol:        item.horaInicioSolicitud,       
            periodoSoli:    item.periodoSolicitud,          
            estadoSoli:     item.estadoSolicitud,           
            materiaSoli:    item.materiaSolicitud,          
            grupoSoli:      item.grupoSolicitud,            
        });
        openModalEdicion();
    }


    return(
        <>
        <div className="contendedor-tabla-generalSolicitud">
            <div className="contenedor-tabla-solicitudes">
                <table>
                    <CamposTablaSolicitud/>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={item.id}>
                                    <td>{ i+1}</td>
                                    <td>{ item.nombreDocenteSolicitud}</td>
                                    <td>{ item.apellidoDocenteSolicitud}</td>
                                    <td>{item.materiaSolicitud}</td>
                                    <td>{item.grupoSolicitud}</td>
                                    <td>{ item.numeroEstudiantesSolicitud}</td>
                                    <td>{ item.motivoSolicitud}</td>
                                    <td>{ item.fechaSolicitud}</td>
                                    <td>{ item.horaInicioSolicitud}</td>
                                    <td className='columna-botones-solicitud'>
                                        <section className='caja-botones-solicitudes'>
                                            <button
                                                className='boton-editar-solicitudes'
                                                onClick={ () => {actualizarSolicitud(item)}}
                                            >
                                                <i className="bi bi-pencil-fill"></i>
                                            </button>
                                        </section>
                                        {/* <section className='caja-botones-solicitudes'> */}
                                            {/* <button className='boton-editar-solicitudes'> */}
                                                {/* <i className="bi bi-trash-fill"></i> */}
                                            {/* </button> */}
                                        {/* </section> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>             
            </div>
            {
                isOpen &&
                <ModalGenerico isOpen={ isOpen } closeModal={ closeModalEdicion } >
                    <FormularioReservaAula
                        titulo='Editar'  
                        idsolicitud    ={id}
                        nomDocente     ={nombreSoli  }
                        apeDocente     ={apellidoSoli}
                        cantEstudiantes={numeroSoli  }
                        selectMotivoR   ={motivoSoli  }
                        fechaSolicitud   ={fechaSoli   }
                        setSelectHora   ={horaSol     }
                        perSolicitud   ={periodoSoli }
                        selects        ={materiaSoli}
                        selectsGrupos  ={grupoSoli   }
                        closeModal={ closeModalEdicion }
                        dataOptenida={data}
                        setListaSolicitud={ setListaSolicitud }
                       
                    />
                </ModalGenerico>
            }
        </div>
        </>
    )
}