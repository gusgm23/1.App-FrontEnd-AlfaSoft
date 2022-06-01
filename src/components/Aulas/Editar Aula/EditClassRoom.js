import React, { useEffect, useRef, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { updateAula, updateClassRoom } from "../../../service/apiAulas";
import { Confirmacion } from "../../Modal/Contenidos/Confirmacion";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { ToastInfo } from "../ToastInformation";

export const EditClassRoom = ({ closeModal, classRoomValues ,handleUpdate }) => {
  const [formData, setFormData] = useState(classRoomValues);
  const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] =
    useModal(false);

  const [showToast, setShowToast] = useState({
    title: "",
    message: "",
    status: false,
  });

  const aulaInputRef = useRef(null);
  const cantidadInputRef = useRef(null);

  useEffect(() => {
    setFormData(classRoomValues);
    aulaInputRef.current.classList.remove("is-invalid");
    cantidadInputRef.current.classList.remove("is-invalid");
  }, [classRoomValues]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateInputs(name, value);
  }

  function validateInputs(name, value) {
    if (name === "nombreAula") {
      if (value.length < 3 || value.length > 10) {
        aulaInputRef.current.classList.add("is-invalid");
      } else {
        aulaInputRef.current.classList.remove("is-invalid");
      }
    }

    if (name === "capacidadAula") {
      console.log(value, name);
      if (value < 5 || value > 100) {
        cantidadInputRef.current.classList.add("is-invalid");
      } else {
        cantidadInputRef.current.classList.remove("is-invalid");
      }
    }
  }

  function handleSubmitEditForm(e) {
    e.preventDefault();
    openModalConfirm();
  }

  
  return (
    <div>
      <div>
        <div className="modal-header">
          <h5 className="modal-title">Editar Aula</h5>
        </div>

       

        <form onSubmit={handleSubmitEditForm} className="mx-3 mt-2">
          <div className="mb-3">
            <label className="form-label">Nombre Aula</label>
            <input
              ref={aulaInputRef}
              type="text"
              className="form-control"
              name="nombreAula"
              value={formData.nombreAula || ""}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">
              El nombre debe tener de 3 a 10 letras.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Capacidad Aula</label>
            <input
              ref={cantidadInputRef}
              type="number"
              className="form-control"
              name="capacidadAula"
              value={formData.capacidadAula || ""}
              onChange={handleInputChange}
            />
            <div className="invalid-feedback">
              Debe ingresar una cantidad entre 5 y 100
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Estado Aula</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="estadoAula"
              value={formData.estadoAula}
              defaultValue={formData.estadoAula}
              onChange={handleInputChange}
            >
              <option value="deshabilitado">Deshabilitado</option>
              <option value="libre">Libre</option>
              <option value="ocupado">Ocupado</option>
            </select>
          </div>

          <div className="modal-footer px-0">
            <button
              type="button"
              className="btn btn-secondary w-auto"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Canselar
            </button>
            <button type="submit" className="btn btn-primary w-auto">
              Actualizar
            </button>
          </div>
        </form>
      </div>

      <ModalGenerico isOpen={isOpenModalConfirm} closeModal={closeModalConfirm}>
        <Confirmacion
          cerrarModal={closeModalConfirm}
          funcGuardar={()=>{handleUpdate(formData, formData.id); closeModal();}}
        />
      </ModalGenerico>
    </div>
  );
};
