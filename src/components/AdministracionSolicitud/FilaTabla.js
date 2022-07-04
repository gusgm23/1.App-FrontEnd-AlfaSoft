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
            idAula: id,
            idSolicitud: ''
        }

        const lista = [];
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

    //Paginador para la tabla
    const [paginaActual, setPaginaActual] = useState(0);

    const filtrarAula = () => {
        return data.slice(paginaActual, paginaActual + 5);
    }

    const siguientePagina = () => {
        setPaginaActual( paginaActual + 5 );
    }

    const anteriorPagina = () => {
        if (paginaActual > 0)
            setPaginaActual( paginaActual - 5);
    }

    return (
        <>
            {
                filtrarAula().map((elem, i) => (
                    <tr key={elem.id} className='animate__animated animate__fadeIn'>
                        <td>{ i+1 }</td>
                        <td>{ elem.nombreAula }</td>
                        <td>{ elem.capacidadAula }</td>
                        <td>
                            <section>
                                <button 
                                    className='btn-reserva'
                                    onClick={ () => ( reducirCapacidad(elem.capacidadAula, elem.id) ) }
                                
                                >
                                    <i className="bi bi-plus-circle-fill icono-reserva"></i>
                                </button>
                            </section>
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
            <div className="contenedorBtnPaginadorReservarAula">
               <button className="botonPaginadorAulaReservarAula" onClick={anteriorPagina}>
               <i className="bi bi-chevron-left"></i>
               </button>
               <button className="botonPaginadorAulaReservarAula" onClick={siguientePagina}>
               <i className="bi bi-chevron-right"></i>
               </button>
            </div>                                                                       
        </>      
    )
}
