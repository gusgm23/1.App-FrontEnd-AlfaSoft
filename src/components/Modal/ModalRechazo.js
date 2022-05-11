import React from "react";
import "./modalrechazo.css";

function ModalRechazo({ closeModal}) {

  return (
      <div className="modalrechazo-container">
    <div className="modalrechazo">
        <h1 className="modalrechazo-titulo">Motivo de rechazo:</h1>
        <div className="modalrechazo-body">
        <textarea 
            className="text-motivorechazo"
            name='motivoRechazo'
            // className={ StatusInputMotivo===true? "input-error" : "inputsSolicitud" }
            type="text"
            placeholder='Motivo de Rechazo'
            // value={ motivoSolicitud }
            // onChange= { handleInputChange }
            ></textarea>
        </div>
        <div className="btn-modalrechazo">
            <button className="btn-editar btn-aceptar">Aceptar</button>
            <button className="btn-editar btn-cancelar"
                
            onClick={()=> closeModal(false) }>Cancelar</button>

        </div>
    </div>
    </div>
    
  );
}

export default ModalRechazo;