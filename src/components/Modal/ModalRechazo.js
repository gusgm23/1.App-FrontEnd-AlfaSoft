import React, { useEffect, useState } from 'react'
import "./modalrechazo.css";
import { useForm } from '../../hooks/useForm';
import { updateSolicitudId, deleteSolicitud } from '../../service/apiSolicitudAulas';


export const ModalRechazo = ({
  nombre_doc      ='',
  ape_doc         ='',
  nro_est         ='',
  motivo          ='',
  fecha_res       ='',
  hora_res        ='',
  // hora_fin        ='',
  periodo         ='',
  estado          ='',
  materiaId       ='',
  solicitudId         ='', 
   
  closeModal })=> {

  const [datos,setDatos,setMotivo] = useState ({
         nombreDocenteSolicitud:nombre_doc,
         apellidoDocenteSolicitud:    ape_doc,
         numeroEstudiantesSolicitud:   nro_est ,
         motivoSolicitud:    motivo,
         motivoRechazo:'',
         fechaSolicitud:    fecha_res,
         horaInicioSolicitud:    hora_res,
        //  horaFinSolicitud: hora_fin,
         periodoSolicitud:    periodo,
         estadoSolicitud: estado,
         materia_id: materiaId,
         solicitudID: solicitudId
         
  });
//   const [formValues, reset] = useForm({
//     nombreDocenteSolicitud:     nombre_doc,
//     apellidoDocenteSolicitud:    ape_doc,
//     numeroEstudiantesSolicitud:   nro_est ,
//     motivoSolicitud:    motivo,
//     fechaSolicitud:    fecha_res,
//     hora:    hora_res, 
//     periodoSolicitud:    periodo,
//     estadoSolicitud: estado   
    
// })

 
  const { nombreDocenteSolicitud, apellidoDocenteSolicitud, 
    numeroEstudiantesSolicitud,motivoSolicitud,motRechazo, 
    fechaSolicitud, horaInicioSolicitud,horaFinSolicitud, 
    periodoSolicitud,estadoSolicitud,materia_id,solicitudID} = datos;
   
  // const [id,setId]=useState('');  
  // const getData=()=>{
  //   return localStorage.getItem("id");

  // }
  // useEffect(()=>{
  //     setId(getData());
  // }, []);

  // const { motRechazo,id} = formValues;
  const enviarMotivo=(item)=>{
    updateSolicitudId(datos,materiaId,);
  }
  const eliminar=(item)=>{
    // idSoli:{data.id};
    deleteSolicitud(item.solicitudID);
  }

  const handleInputChange=(event)=>{
    //  console.log(event.target.value)
    setDatos ({
      ...datos,
      [event.target.name] : event.target.value,

    })  
  }
  const enviarDatos=(event)=>{
    event.preventDefault(); 
  }

  return (
      <form className="modalrechazo-container" onSubmit={enviarDatos} >
       <div className="modalrechazo">
        <h1 className="modalrechazo-titulo">Motivo de rechazo:</h1>
        <div className="modalrechazo-body">
        <textarea 
            className="text-motivorechazo"
            name='motivoRechazo'
            // className={ StatusInputMotivo===true? "input-error" : "inputsSolicitud" }
            type="text"
            placeholder='Motivo de Rechazo'
            onChange= { handleInputChange }
            ></textarea>
        </div>
        <div className="btn-modalrechazo">
            <button className="btn-editar btn-aceptar" 

            onClick={()=>
              enviarMotivo(datos)
              //  console.log({datos}) 
          }
            >Aceptar</button>
            <button className="btn-editar btn-cancelar"
                
            onClick={()=> closeModal(false) }>Cancelar</button>

        </div>
    </div>
    </form>
    
  );
}
