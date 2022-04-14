import React from 'react'
import './estilosFormularioReserva.css'


export const FormularioReservaAula = () => {
    return (
        <div className="contenedor-reserva-aulas">
            <h2 className="titulo-reserva-aulas"> Reservar Aula </h2>
            <form>
                <div className="contenedor-reserva">
                    <div className="contenedor-elementos-reserva-aulas">
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Nombre Docente:</label>
                            <input className="inputs" type="text"></input>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Materia: </label>
                            <input className="inputs" type="text"></input>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Grupo(s): </label>
                            <input className="inputs" type="number"></input>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Cantidad de Estudiantes: </label>
                            <input className="inputs" type="number"></input>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Fecha de Examen: </label>
                            <input className="inputs" type="date"></input>
                        </div>
                        <div className="campos-reserva-aulas">
                            <label className="labels"> Hora de Examen: </label>
                            <input className="inputs"type="time"></input>
                        </div>

                    </div>
                    <div className="btns-reserva-aula">
                        <button className="boton-cancelar" type="button">
                            Cancelar
                        </button>
                        <button className="boton-aceptar" type="button">
                            Aceptar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
