import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth/authContext";
import { classroomRequestStatus } from "../../../enums/solicitudes";
import { useModal } from "../../../hooks/useModal";
import { getSolicitudByDocent } from "../../../service/apiSolicitudAulas";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import Spinner from "../../Spinner/Spinner";
import "./styles.css";

export const SolicitudesRechazadas = () => {
  const { user } = useContext(AuthContext);

  const [solicitudesRechazadas, setSolicitudesRechazadas] = useState([]);
  const [solicitud, setSolicitud] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, openModal, closeModal] = useModal(false);

  useEffect(() => {
    const config = {
      nombreDocenteSolicitud: user.name,
      apellidoDocenteSolicitud: user.apellido,
      estadoSolicitud: classroomRequestStatus.REFUSED,
    };

    getSolicitudByDocent(config).then((resp) => {
      setSolicitudesRechazadas(resp.data);
      setIsLoading(false);
    });
  }, [user]);

  function showRefusedDetail(solicitud) {
    setSolicitud(solicitud);
    openModal();
  }
  let horafin="";

  if (solicitud.horaInicioSolicitud !== undefined) {
    const hourArr = solicitud.horaInicioSolicitud.split(":");

    const lastHour = (solicitud.periodoSolicitud * 1.5).toString().split(".");
    const horaFin=Number(hourArr[0])+Number(lastHour[0]);
    var minFin=hourArr[1];
    if(lastHour[1]){
     minFin=Number(hourArr[1])+30;
    }

    horafin=`${horaFin}:${minFin}:00`
  }

  return (
    <div className="solicitudes-container">
      <div className="animate__animated animate__fadeIn">
        <h2>
          Solicitudes rechazadas: {!isLoading && solicitudesRechazadas.length}
        </h2>
        <hr />
      </div>
      {solicitudesRechazadas.length === 0 && !isLoading && (
        <p className="parraf-soli-aprob">
          No tienes solicitudes que hayan sido rechazadas.
        </p>
      )}

      {isLoading && <Spinner />}

      {!isLoading && solicitudesRechazadas.length>0 && (
        <table className=" animate__animated animate__fadeIn">
          <thead>
            <tr className="titulo-tabla-solicitudes">
              <th>#</th>
              <th>Motivo</th>
              <th>Materia</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th>Detalle Rechazo</th>
            </tr>
          </thead>

          <tbody>
            {solicitudesRechazadas.map((solicitud, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{solicitud.motivoSolicitud}</td>
                  <td>{solicitud.materiaSolicitud}</td>
                  <td>{solicitud.fechaSolicitud}</td>
                  <td>{solicitud.horaInicioSolicitud}</td>
                  <td>{solicitud.estadoSolicitud}</td>
                  <td>
                    <button
                      className="btn-ver-aulas-reservadas"
                      onClick={() => {
                        showRefusedDetail(solicitud);
                      }}
                    >
                      <i className="bi bi-eye-fill icon-ver-aulas-reserv"></i>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
      <ModalGenerico isOpen={isOpen} closeModal={closeModal}>
        <div className="title-modal">Detalle de Rechazo</div>
        <div className="separator"></div>
        <div className="modal-contend-reserva-aula">
         <label>
          {solicitud.nombreDocenteSolicitud} {solicitud.apellidoDocenteSolicitud}
        </label>
        <label>
        <span>Motivo Rechazo : </span>
          {solicitud.motivoRechazo}
        </label>
        <label>{solicitud.materiaSolicitud}</label>
        <label>
          <span>Grupo : </span>
          {solicitud.grupoSolicitud}
        </label>
        <label>
          <span>Fecha : </span>
          {solicitud.fechaSolicitud}
        </label>
        <label>
          <span>Hora : </span>
          {solicitud.horaInicioSolicitud}-{horafin}
        </label>
        <label>
          <span>Periodo : </span>
          {solicitud.periodoSolicitud}
        </label>
        </div>
      </ModalGenerico>
    </div>
  );
};
