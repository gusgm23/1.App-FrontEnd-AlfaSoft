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
          {listaReservas[0].grupoMateria}
        </label>
        <label>
          <span>Periodo : </span>
          {listaReservas[0].periodo}
        </label>
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
