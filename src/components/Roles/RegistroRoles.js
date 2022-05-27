import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import './registroRolesEstilos.css';

import { controlarCampoRol } from '../../helpers/validarRolUser';


export const RegistroRoles = ({ rol ='', closeModal = () => {} }) => {

    const[formValues, handleInputChange, reset] = useForm({ roles: rol, })

    const { roles } = formValues;

    //Hooks para controlar los contenidos de los campos
    const [StatusInputRoles, setStatusInputRoles] = useState(false);

    //Hooks para mostrar el mensaje de error en los campos
    const [MsjErrorRol, setMsjErrorRol] = useState('');


    useEffect(() => {
        if( roles === '' ) {
            setStatusInputRoles(false);
        }else {
            controlarCampoRol( roles, setStatusInputRoles, setMsjErrorRol );
        }
    }, [roles])


    return (
        <div className="contenedor-registro-roles">
            <h1 className="titulo-registro-roles"> Registrar Roles </h1>
            <form>
                <div className="contenedor-roles">
                    <div className="contenedor-elementos-registro-roles">
                        <div className="campos-registro-roles">
                            <label className="labels-roles"> Roles: </label>
                            <div className="contenedor-inputs-roles">
                                <input
                                    name="roles"
                                    className={ StatusInputRoles===true? "input-error" : "inputsRoles"}
                                    type="text"
                                    placeholder="Ingresar un rol"
                                    value={ roles }
                                    onChange={ handleInputChange }
                                >
                                </input>
                                <p className={ StatusInputRoles===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorRol }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-roles">
                            <label className="labels-roles"> Estado: </label>
                            <div className="contenedor-inputs-roles">
                                <select
                                    name="estadoRoles"
                                    className="inputsRoles"
                                    placeholder="Elegir estado"
                                >
                                    <option> Habilitado </option>
                                    <option> Deshabilitado </option>
                                </select>
                            </div>
                        </div>

                        <div className="contenedor-botones-roles">
                            <button
                                className="botonR boton-cancelar-rol"
                                type="button"
                            >
                                Cancelar
                            </button>
                            <button
                                className="botonR boton-aceptar-rol"
                                type="button"
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}