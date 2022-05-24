import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, Toast } from "react-bootstrap";

// const styles = {
//   success: {
//       background: "#81c784",
//       color:"white"
//     },
//     error: {
//         background: "#e57373",
//         color:"white"
//   },
// };

export const ToastInfo = ({ title, message, status }) => {
  const [showToast, setShowToast] = useState(status);
  const [position, setPosition] = useState("top-end");
  return (
    // <section>
    //   <div
    //     className="position-fixed top-0 end-0 m-3"
    //     // style={{}}
    //     role="alert"
    //     ref={toast}
    //   >
    //     <div
    //       className="toast-header"
    //       style={{...styles[type]}}
    //     >
    //       <strong className="me-auto">{title}</strong>
    //       {/* <small>{time} mins ago</small> */}
    //       <button
    //         type="button"
    //         className="btn-close"
    //         onClick={handleClose}
    //         aria-label="Close"
    //       ></button>
    //     </div>
    //     <div className="toast-body" style={{background:"white"}}>  {message}</div>
    //   </div>
    // </section>
    <div
      // aria-live="polite"
      // aria-atomic="true"
      className="position-absolute top-0 end-0 m-3 mt-5"
      style={  {"z-index": 11}}
      // style={{ minHeight: "240px" ,height:20}}
    >
      <ToastContainer className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          // autohide
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
