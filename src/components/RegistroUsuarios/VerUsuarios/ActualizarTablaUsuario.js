import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";


export const ActualizarTablaUsuario = ({ title, message, status }) => {
    const [mostrarMensaje, setmostrarMensaje] = useState(status);

    return (
        <div className="position-absolute top-0 end-0 m-3 mt-5">
            <ToastContainer>
                <Toast 
                    onClose={() => setmostrarMensaje(false)}
                    show={mostrarMensaje}

                >
                    <Toast.Header>
                        <strong>{title}</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}