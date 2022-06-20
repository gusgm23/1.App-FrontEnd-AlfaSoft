import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, Toast } from "react-bootstrap";



export const ToastInfo = ({ title, message, status }) => {
  const [showToast, setShowToast] = useState(status);
  const [position, setPosition] = useState("top-end");
  return (
  
    <div
      className="position-absolute bottom-0 end-0 m-3 mt-5"
      style={  { zIndex: '11'}}
    >
      <ToastContainer className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
            <small className="text-muted">justo ahora</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};
