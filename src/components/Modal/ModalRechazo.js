import React, {useState } from 'react'
import "./modalrechazo.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


import { updateSolicitud } from '../../service/apiSolicitudAulas';


export const ModalRechazo = ({

	motivoRechazo='',
	closeModal })=> {

		const {state:solicitud} = useLocation();    

	const [formValues,setDatos] = useState ({
				id:solicitud.id, 
				nombreDocenteSolicitud:solicitud.nombreDocenteSolicitud, 
				apellidoDocenteSolicitud:solicitud.apellidoDocenteSolicitud, 
				numeroEstudiantesSolicitud:solicitud.numeroEstudiantesSolicitud, 
				motivoSolicitud:solicitud.motivoSolicitud,
				//motivoRechazo:, 
				fechaSolicitud:solicitud.fechaSolicitud, 
				horaInicioSolicitud:solicitud.horaInicioSolicitud, 
				periodoSolicitud:'1', 
				estadoSolicitud:'Solicitud Rechazada', 
				materiaSolicitud:solicitud.materiaSolicitud, 
				grupoSolicitud:solicitud.grupoSolicitud, 
				materia_id:solicitud.materia_id 
				 
	});
	const navigate=useNavigate();
	function handleNavigate() {
        
        navigate("/admin/verSolicitudes")
    }

    const Alerta=()=>{
		swal({
			title:"Solicitud Rechazada",
			icon:"success",
			button:"Ok"
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
						>Aceptar</button>
						<button className="btn-editar btn-cancelar"
								
						onClick={()=> closeModal(false) }>Cancelar</button>

				</div>
		</div>
	</form>
						</>
					);
						
						
}
