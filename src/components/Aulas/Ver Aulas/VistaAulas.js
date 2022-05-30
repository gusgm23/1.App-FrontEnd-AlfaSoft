import React, { useEffect, useRef, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import {
  deleteClassRoom,
  getAulas,
  getAulasLibres,
  getEnableClassRoom,
  logicDelete,
  updateClassRoom,
} from "../../../service/apiAulas";
import { ModalGenerico } from "../../Modal/ModalGenerico";

import "./estilos-ver-aulas.css";
import { ToastInfo } from "../ToastInformation";
import { EditClassRoom } from "../Editar Aula/EditClassRoom";
import { Confirmacion } from "../../Modal/Contenidos/Confirmacion";
import { ModalEjm } from "../../Modal/ModalEjm";
import { ConfirmModal } from "../../Modal/Contenidos/ConfirmModal";
import { useNavigate } from "react-router-dom";

export const VistaAulas = () => {
  const [isOpen, openModalEdicion, closeModalEdicion] = useModal(false);
  const [isOpenModalConfirm, openModalConfirm, closeModalConfirm] =
    useModal(false);

  const [classRoomToDelete, setClassRoomToDelete] = useState({});
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [showToast, setShowToast] = useState({
    title: "",
    message: "",
    status: false,
  });
  const [dataAulas, setdataAulas] = useState({
    state: false,
    data: [],
  });
  const [classRoomToUpdate, setClassRoomToUpdate] = useState({});

  useEffect(() => {
    getEnableClassRoom(setdataAulas);
    // getAulasLibres(setdataAulas)
    console.log(dataAulas.data);
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    setSearchFilter(dataAulas.data);
  }, [dataAulas]);

  useEffect(() => {
    function searchClassRoom() {
      const searchArr = [];

      dataAulas.data.forEach((data) => {
        console.log(data.nombreAula);
        if (data.nombreAula.startsWith(search)) {
          searchArr.push(data);
        }
      });
      setSearchFilter(searchArr);
    }
    searchClassRoom();
  }, [search]);

  function handleEdit(data) {
    console.log("edit", data);

    openModalEdicion();
    setClassRoomToUpdate({ ...data });
  }

  function handleConfirmDelete() {
    const { id, nombreAula } = classRoomToDelete;
    logicDelete(id)
      .then((message) => {
        const dataUpdated = searchFilter.filter(
          (classroom) => classroom.id !== id
        );
        setSearchFilter(dataUpdated);

        setShowToast({
          title: "Eliminacion Existosa!",
          message: `Se elimino el Aula ${nombreAula}`,
          status: true,
          type: "success",
        });
        closeModalConfirm();
      })
      .catch(() => {
        setShowToast({
          title: "Error!",
          message: `Fallo al elimina el Aula ${nombreAula}`,
          status: true,
          type: "error",
        });
      });

    setTimeout(() => {
      setShowToast({
        ...showToast,
        status: false,
      });
    }, 3000);
  }

  function handleUpdate(newClassRoom, id) {
    console.log("confirm updated");
    updateClassRoom(newClassRoom, id)
      .then(() => {
        const dataUpdated = searchFilter.filter(
          (classroom) => classroom.id !== id
        );
        dataUpdated.push(newClassRoom);
        setSearchFilter(dataUpdated);

        console.log("Se actualizo");
        setShowToast({
          title: "Actualizacion Existosa!",
          message: `Se actualizo el Aula ${newClassRoom.nombreAula}`,
          status: true,
          type: "success",
        });
      })
      .catch(() => {
        setShowToast({
          title: "Error!",
          message: `Fallo al actualizar el Aula ${newClassRoom.nombreAula}`,
          status: true,
          type: "error",
        });
      });
    setTimeout(() => {
      setShowToast({
        ...showToast,
        status: false,
      });
    }, 3000);
  }





  const navigate = useNavigate();





  return (
    <>
     {showToast.status && (
      <ToastInfo
            title={showToast.title}
            message={showToast.message}
            status={showToast.status}
      />
          )}
      <div className="contenedor-gral">
        <div>
          <div>
            {/* <h2 className="titulo-ver-aulas">Buscar Aulas: </h2> */}
            {/* <hr /> */}
            {/* <form onSubmit={handleFormSearch}> */}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar Aulas"
                value={search}
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="btn btn-primary"
                id="basic-addon2"
              >
                Buscar
              </button>
            </div>
            {/* <hr></hr> */}

            {/* </form> */}
          </div>
          <h2 className="titulo-ver-aulas">Aulas Registradas: </h2>
          <button 
                        className='btn-crear-materia'
                        onClick={ ()=>{navigate('/admin/registroAula')} }
                    >
                        <i className="biribanban bi-plus-square-fill"></i>
                    </button>

          <hr />
          {/* {true && (
           
          )} */}

          <div className='contenedor-tabla'>
            <table className="table table-responsive">
              <thead>
                <tr className="titulo-tabla">
                  <th>#</th>
                  <th>Nombre </th>
                  <th>Capacidad</th>
                  <th>Estado</th>
                  <th  width="110px" style={{"boxSizing":"border-box"}}>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {searchFilter.map((item) => (
                  <tr key={item.id}>
                    <td className="col-id">{item.id}</td>
                    <td className="col-grupo">{item.nombreAula}</td>
                    <td> {item.capacidadAula} </td>
                    <td> {item.estadoAula} </td>
                    <td>
                      <button
                        className="btn boton-editar-usuarios btn btn-light btn-sm w-auto"
                        onClick={() => {
                          handleEdit(item);
                        }}
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </button>
                      <button
                        className="btn boton-editar-usuarios btn btn-light btn-sm w-auto ms-1"
                        onClick={() => {
                          openModalConfirm();
                          setClassRoomToDelete(item);
                        }}
                      >
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     

      <ModalGenerico isOpen={isOpen} closeModal={closeModalEdicion}>
        <EditClassRoom
          closeModal={closeModalEdicion}
          classRoomValues={classRoomToUpdate}
          handleUpdate={handleUpdate}
        />
      </ModalGenerico>

      <ModalGenerico isOpen={isOpenModalConfirm} closeModal={closeModalConfirm}>
        <ConfirmModal
          title={"Esta seguro de eliminar?"}
          cancel={() => {
            closeModalConfirm();
          }}
          confirm={() => {
            handleConfirmDelete();
          }}
        />
      </ModalGenerico>
     
    </>
  );
};
