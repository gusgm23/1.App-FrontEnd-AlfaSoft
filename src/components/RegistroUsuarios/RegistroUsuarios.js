import React from "react";


export const RegistroUsuarios = () => {



    return (

        <div className="contenedor-registro-usuarios">
            <h2 className="titulo-registro-usuarios"> Registro de Usuarios </h2>
            <form>
                <div className="contenedor-general-registro-usuarios">
                    <div className="contenedor-elementos-registro-usuarios">
                        <div className="campos-registro-usuario">
                            <label className="labels"> Nombre: </label>
                            <input className="inputs" type="text"></input>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels"> Cargo: </label>
                            <input className="inputs" type="text"></input>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels"> Telefono: </label>
                            <input className="inputs" type="number"></input>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels"> Direccion: </label>
                            <input className="inputs" type="text"></input>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels"> Correo: </label>
                            <input className="inputs" type="text"></input>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels"> Contraseña: </label>
                            <input className="inputs"></input>
                        </div>
                    </div>
                    <div className="contenedor-botones-usuario">
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