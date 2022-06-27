import { arrow, end } from '@popperjs/core';
import React from "react";
import { periodHours } from "../../../enums/classHours";

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

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

  const fullDate = `${days[d.getDay()]} ${d.getDate()} de ${months[d.getMonth()]} del ${d.getFullYear()} `;

  const startPeriod=periodHours.indexOf(horaInicioSolicitud);
  const endPeriod=startPeriod+ Number(periodoSolicitud);
  

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
          <span>Cantidad de estudiantes: </span>
          { numeroEstudiantesSolicitud}
        </label>
        <label>
          <span>Fecha : </span>
          {fullDate}
        </label>
        <label>
          <span>Hora : </span>
          {horaInicioSolicitud} - {periodHours[endPeriod]}
        </label>
        <label>
          <span>Periodo : </span>
          {periodoSolicitud}
        </label>

      </section>
    </>
  );
};
