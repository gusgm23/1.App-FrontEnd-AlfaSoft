import React, {useState }  from 'react'
import  {ModalRechazo}  from '../Modal/ModalRechazo';
import { ModalGenerico } from '../Modal/ModalGenerico';


import { getHoraFin } from '../../helpers/metodosGetionSolicitudes';

export const FilaTabla = ( {data=[], fecha, hora, periodo, guardarDatos, capacidadSoli, modalReserva, datosCapacidad=[]} ) => {

    const mostrarFecha = () => {

        let horaSeparada = hora[0] + hora[1];
        let minutosSeparados = hora[3] + hora[4];
        let periodoSeparado = periodo[0]
        
        let horaFin = getHoraFin(horaSeparada,minutosSeparados, periodoSeparado)
        
        return horaFin
    }

    const reducirCapacidad = ( capacidadAula, id ) => {

        const reserva = {
            horaIni: hora,
            horaFin: mostrarFecha(),
            fechaReserv: fecha,
            idAula: id
        }

        const lista = datosCapacidad.listaReservas;
        lista.push(reserva);

        guardarDatos({
            capacidadSoliRescatado: capacidadSoli,
            capacidadAulaRescatado: capacidadAula,
            listaReservas: lista
        })
        modalReserva();

    }
    //modal rechazo
    const[openModalRechazo,setOpenModalRechazo,closeModalRechazo]=useState(false);


    return (
        <>
            {
                data.map((elem, i) => (
                    <tr key={elem.id} className='animate__animated animate__fadeIn'>
                        <td>{ i+1 }</td>
                        <td>{ elem.nombreAula }</td>
                        <td>{ elem.capacidadAula }</td>
                        <td>{ elem.estadoAula }</td>
                        <td>
                            <button 
                                className='btn-reserva'
                                onClick={ () => ( reducirCapacidad(elem.capacidadAula, elem.id) ) }
                            
                            >
                                Reservar 
                            </button>
                            <button 
                                className='btn-rechazo'
                                onClick={ () =>{
                                    setOpenModalRechazo(true);
                                }
                                    //  ( reducirCapacidad(elem.capacidadAula, elem.id) ) 
                                    }
                            
                            >
                                Rechazar 
                            </button>
                        </td>
                    </tr>
                ))
            }
            {openModalRechazo && 
            <ModalGenerico  isOpen={openModalRechazo} closeModal={closeModalRechazo}>
              <ModalRechazo 
            //   nombre_doc ={nombreDocenteSolicitud} 
            //   ape_doc ={apellidoDocenteSolicitud} 
            //   motivoRechazo=""
            //   nro_est ={numeroEstudiantesSolicitud} 
            //   motivo ={motivoSolicitud}
            //   fecha_res ={fechaSolicitud}
            //   hora_res ={horaInicioSolicitud}

            //   periodo ={periodoSolicitud}
            //   estado ="Solicitud Rechazada"
            //   materiaId={materia_id}
            //   materiaSolicitud={materiaSolicitud}
            //   solicitudId={soliID}
              
              closeModal={setOpenModalRechazo}/> 
            </ModalGenerico>
            }
        </>
    )
}
