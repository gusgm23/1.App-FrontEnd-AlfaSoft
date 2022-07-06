import React, {useState } from 'react'
import "./modalrechazo.css";
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


import { updateSolicitud } from '../../service/apiSolicitudAulas';


export const ModalRechazo = ({

    id_soli         ='',
	nombre_doc      ='',
	ape_doc         ='',
	nro_est         ='',
	motivo          ='',
	fecha_res       ='',
	hora_res        ='',
	periodo         ='',
	mat_soli        ='',
	grupo           ='',
	mat_id          ='',

	motivoRechazo='',
	closeModal })=> {

    // const {state:solicitud} = useLocation();    

	const [formValues,setDatos] = useState ({
				id:id_soli, 
				nombreDocenteSolicitud:nombre_doc, 
				apellidoDocenteSolicitud:ape_doc, 
				numeroEstudiantesSolicitud:nro_est, 
				cantidadEstudiantesAsignada:'0',
				motivoSolicitud:motivo,
				fechaSolicitud:fecha_res, 
				horaInicioSolicitud:hora_res, 
				periodoSolicitud:periodo, 
				estadoSolicitud:'Solicitud Rechazada', 
				materiaSolicitud:mat_soli, 
				grupoSolicitud:grupo, 
				materia_id:mat_id 
				 
	});
	const navigate=useNavigate();
	const recargar=()=>{
		setTimeout(function() {
		  window.location.reload(true);
		}, 300);
	  }
	function handleNavigate() {
        
        navigate("/admin/verSolicitudes")
		//recargar()
    }
    const Alerta=()=>{
		swal({
			title:"Solicitud Rechazada",
			icon:"success",
			button:"Aceptar"
		}).then(respuesta=>{
			if(respuesta){
               handleNavigate();
			}
		})
	}
	const Alertamotivovacio=()=>{
		swal({
			title:"Debe ingresar el motivo",
			icon:"error"
		})
	}
	const enviarMotivo=(item)=>{

		if(item.motivoRechazo===undefined){
			Alertamotivovacio();
		}
		else{
		updateSolicitud(item)
		Alerta();
		closeModal(false);
		}

	}
	const handleInputChange=(event)=>{
		//  console.log(event.target.value)
		setDatos ({
			...formValues,
			[event.target.name] : event.target.value,

		})  
	}
	const enviarDatos=(event)=>{
		event.preventDefault(); 
	}

	return (
		<>
			<form className="modalrechazo-container" onSubmit={enviarDatos} >
			 <div className="modalrechazo">
				<h1 className="modalrechazo-titulo">Motivo de rechazo:</h1>
				<div className="modalrechazo-body">
				<textarea 
						className="text-motivorechazo"
						name='motivoRechazo'
						type="text"
						placeholder='Motivo de Rechazo'
						onChange= { handleInputChange }
						></textarea>
				</div>
				<div className="btn-modalrechazo">
						<button className="btn-editar btn-aceptar" 

						onClick={()=>
							enviarMotivo(formValues)
					}
							><NavLink exact='true' to='/admin/adminhome'>Aceptar</NavLink>
						</button>
						<button className="btn-editar btn-cancelar"
								
						onClick={()=> closeModal(false) }>Cancelar</button>

				</div>
		</div>
	</form>
						</>
					);
						
						
}
