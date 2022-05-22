import React from "react";
import confirmacionImg from "../../../images/preg.svg";

export const ConfirmModal = ({ cancel, confirm, title }) => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title" id="myModalLabel">
          {title}
        </h4>
      </div>
      <div className="modal-body">
        <img src={confirmacionImg} className="img-advertencia" alt="alert" />
      </div>
      <div className="modal-footer">
      <button
          onClick={cancel}
          className="btn btn-secondary w-25"
          type="button"
          id="modal-btn-no"
        >
          No
        </button>
        <button
          onClick={confirm}
          type="button"
          className="btn btn-primary w-25"
          id="modal-btn-si"
          >
          Si
        </button>
        
      </div>
    </>
  );
};
