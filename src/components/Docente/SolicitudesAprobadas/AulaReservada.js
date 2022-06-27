import React from "react";

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

  const fullDate = `${days[d.getDay()]}${d.getDate()} de ${months[d.getMonth()]} del ${d.getFullYear()} `;

  console.log(fullDate);

  let horafin="";

  if (horaInicioSolicitud !== undefined) {
    const hourArr = horaInicioSolicitud.split(":");

    const lastHour = (periodoSolicitud * 1.5).toString().split(".");
    const horaFin=Number(hourArr[0])+Number(lastHour[0]);
    var minFin=hourArr[1];
    if(lastHour[1]){
     minFin=Number(hourArr[1])+30;
    }

    horafin=`${horaFin}:${minFin}:00`
  }
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
        </label><label>
          <span>Cantidad de estudiante Asignada : </span>
          { cantidadEstudiantesAsignada}
        </label>
        <label>
          <span>Fecha : </span>
          {fullDate}
        </label>
        <label>
          <span>Hora : </span>
          {horaInicioSolicitud} - {horafin}
        </label>
        <label>
          <span>Periodo : </span>
          {periodoSolicitud}
        </label>
      </section>
    </>
  );
};
