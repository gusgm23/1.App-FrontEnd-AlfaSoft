import { arrow, end } from '@popperjs/core';
import React from "react";
import { periodHours } from "../../../enums/classHours";

import  './estilos-solicitudes-aprobadas.css';

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

export const AulaReservada = ({ listaReservas=[], closeModal }) => {

<<<<<<< HEAD
  const d = new Date(fechaSolicitud);
  console.log(d);

  const fullDate = `${days[d.getDay()]} ${d.getDate()} de ${months[d.getMonth()]} del ${d.getFullYear()} `;

  const startPeriod=periodHours.indexOf(horaInicioSolicitud);
  const endPeriod=startPeriod+ Number(periodoSolicitud);
  

=======
>>>>>>> 6190a5124dedf32390d1339c2a1fb79e41fd4087
  return (
    <>
      <div className="title-modal">Información de solicitud aprobada</div>
      <div className="separator"></div>
      <section className="modal-contend-reserva-aula">
        <label>
          <span>Nombre : </span>
          {listaReservas[0].nombreDocente} 
        </label>
        <label>
          <span>Materia : </span>
          {listaReservas[0].materiaDocente}
          </label>
        <label>
          <span>Grupo : </span>
<<<<<<< HEAD
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
=======
          {listaReservas[0].grupoMateria}
>>>>>>> 6190a5124dedf32390d1339c2a1fb79e41fd4087
        </label>
        <label>
          <span>Periodo : </span>
          {listaReservas[0].periodo}
        </label>
<<<<<<< HEAD

=======
        <label>
          <span>Fecha : </span>
          {listaReservas[0].fechaReserva}
        </label>
        <label>
          <span>Hora inicio : </span>
          {listaReservas[0].horaInicio}
        </label>
        <label>
          <span>Hora fin : </span>
          {listaReservas[0].horaFinal}
        </label>
        <label>
          <span>Aula(s) asignada(s): {listaReservas.length} </span>
        </label>
        <label>
          <span>Cantidad de estudiantes requerido: </span>
          {listaReservas[0].cantidadEstudiante}
        </label>
        <label>
          <span>Cantidad de estudiantes asignado: </span>
          {listaReservas[0].asignado}
        </label>
        <hr/>

        {
          listaReservas.map( reserva => (
            <>
              <label>
                <span>Aula: </span>
                {reserva.nombreAula}
              </label>
              <label>
                <span>Capacidad: </span>
                {reserva.capacidadAula}
              </label>
              <hr/>
            </>
          ) )
        }
>>>>>>> 6190a5124dedf32390d1339c2a1fb79e41fd4087
      </section>
      <div className="cont-btn-info-reserva">
        <button
          className="btn-entendido-reserva"
          onClick={closeModal}
        >
          Entendido
        </button>
      </div>
    </>
  );
};
