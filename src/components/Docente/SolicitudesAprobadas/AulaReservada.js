import React from "react";

const days = {
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
  7: "Domingo",
};
const months = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

export const AulaReservada = ({ reservedClassRoom }) => {
  const {
    apellidoDocenteSolicitud,
    cantidadEstudiantesAsignada,
    capacidadAula,
    estadoSolicitud,
    fechaSolicitud,
    grupoSolicitud,
    horaInicioSolicitud,
    id,
    materiaSolicitud,
    materia_id,
    motivoRechazo,
    motivoSolicitud,
    nombreAula,
    nombreDocenteSolicitud,
    numeroEstudiantesSolicitud,
    periodoSolicitud,
  } = reservedClassRoom;

  const d = new Date(fechaSolicitud);
  console.log(d);

  const fullDate = `${d.getDate()} de ${months[d.getMonth()]} del ${d.getFullYear()} `;

  console.log(fullDate);


  //123
  return (
    <>
      <div className="title-modal">Aula Reservada</div>
      <div className="separator"></div>
      <section className="modal-contend-reserva-aula">
        <label>
          {nombreDocenteSolicitud} {apellidoDocenteSolicitud}
        </label>
        <label>{materiaSolicitud}</label>
        <label>
          <span>Grupo : </span>
          {grupoSolicitud}
        </label>
        <label>
          <span>Nombre Aula : </span>
          {nombreAula}
        </label>
        <label>
          <span>Capacidad Aula : </span>
          {capacidadAula}
        </label>
        <label>
          <span>Fecha : </span>
          {fullDate}
        </label>
        <label>
          <span>Hora : </span>
          {horaInicioSolicitud}
        </label>
        <label>
          <span>Periodo : </span>
          {periodoSolicitud}
        </label>
      </section>
    </>
  );
};
