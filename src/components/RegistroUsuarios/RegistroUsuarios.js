import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./registroUsuarioEstilos.css";
import { Password } from 'primereact/password';
import 'primeicons/primeicons.css';


import { controlarCampoNombre, controlarCampoApellido, controlarCampoTelefono, controlarCampoDireccion, controlarCampoCorreo } from '../../helpers/validarRolUser';


export const RegistroUsuarios = ({

    nom ='',
    ape ='',
    tel ='',
    dir ='',
    cor ='',

    closeModal = () => {}     
}) => {

    const [formValues, handleInputChange, reset] = useForm({
        nombreUsuario:      nom,
        apellidoUsuario:    ape,
        telefonoUsuario:    tel,
        direccionUsuario:   dir,
        correoUsuario:      cor,
    })

    const { nombreUsuario, apellidoUsuario, telefonoUsuario, direccionUsuario, correoUsuario } = formValues;

    //Hooks para controlar los contenidos de los campos
    const [StatusInputNombre, setStatusInputNombre] = useState(false);
    const [StatusInputApellido, setStatusInputApellido] = useState(false);
    const [StatusInputTelefono, setStatusInputTelefono] = useState(false);
    const [StatusInputDireccion, setStatusInputDireccion] = useState(false);
    const [StatusInputCorreo, setStatusInputCorreo] = useState(false);

    //Hooks para mostrar el mensaje de error en los campos
    const [MsjErrorNombre, setMsjErrorNombre] = useState('');
    const [MsjErrorApellido, setMsjErrorApellido] = useState('');
    const [MsjErrorTelefono, setMsjErrorTelefono] = useState('')
    const [MsjErrorDireccion, setMsjErrorDireccion] = useState('');
    const [MsjErrorCorreo, setMsjErrorCorreo] = useState('');

    //Hook para la contraseña
    const [contraseñaUsuario, setcontraseñaUsuario] = useState('');
    const [contraseñaUsuarioConf, setcontraseñaUsuarioConf] = useState('');

    useEffect(() => {
        if( nombreUsuario === '' ) {
            setStatusInputNombre(false);
        }else {
            controlarCampoNombre( nombreUsuario, setStatusInputNombre, setMsjErrorNombre );
        }
    }, [nombreUsuario])

    useEffect(() => {
        if( apellidoUsuario === '' ) {
            setStatusInputApellido(false);
        }else {
            controlarCampoApellido( apellidoUsuario, setStatusInputApellido, setMsjErrorApellido );
        }
    }, [apellidoUsuario])

    useEffect(() => {
        if( telefonoUsuario === '' ) {
            setStatusInputTelefono(false);
        }else {
            controlarCampoTelefono( telefonoUsuario, setStatusInputTelefono, setMsjErrorTelefono );
        }
    }, [telefonoUsuario])

    useEffect(() => {
        if( direccionUsuario === '' ) {
            setStatusInputDireccion(false);
        }else {
            controlarCampoDireccion( direccionUsuario, setStatusInputDireccion, setMsjErrorDireccion );
        }
    }, [direccionUsuario])

    useEffect(() => {
        if( correoUsuario === '' ) {
            setStatusInputCorreo(false);
        }else {
            controlarCampoCorreo( correoUsuario, setStatusInputCorreo ,setMsjErrorCorreo );
        }
    }, [correoUsuario])


    return (

        <div className="contenedor-registro-usuarios">
            <h1 className="titulo-registro-usuarios"> Registro de Nuevos Usuarios </h1>
            <form>
                <div className="contenedor-usuarios">
                    <div className="contenedor-elementos-registro-usuarios">
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Nombre(s): </label>
                            <div className="contenedor-inputs-usuario">
                                <input 
                                    name="nombreUsuario"
                                    className={ StatusInputNombre===true? "input-error" : "inputsUsuario" }
                                    type="text"
                                    placeholder="Ingresar Nombre"
                                    value={ nombreUsuario }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputNombre===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorNombre }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Apellido(s): </label>
                            <div className="contenedor-inputs-usuario">
                                <input 
                                    name="apellidoUsuario"
                                    className={ StatusInputApellido===true? "input-error" : "inputsUsuario" }
                                    type="text"
                                    placeholder="Ingresar Apellido"
                                    value={ apellidoUsuario }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputApellido===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorApellido }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Cargo Del Usuario: </label>
                            <div className="contenedor-inputs-usuario">
                                <select 
                                    name="CargoUsuario"
                                    className="inputsUsuario" 
                                    
                                    placeholder="Elegir Cargo"
                                >
                                    <option> Elegir Cargo </option>
                                    
                                    <option> Docente </option>
                                    <option> Auxiliar </option>
                                </select>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Celular: </label>
                            <div className="contenedor-inputs-usuario">
                                <input 
                                    name="telefonoUsuario"
                                    className={ StatusInputTelefono===true? "input-error" : "inputsUsuario" }
                                    type="number"
                                    placeholder="Ingresar Numero De Celular"
                                    value={ telefonoUsuario }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputTelefono===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorTelefono }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Direccion: </label>
                            <div className="contenedor-inputs-usuario">
                                <input 
                                    name="direccionUsuario"
                                    className={ StatusInputDireccion===true? "input-error" : "inputsUsuario" }
                                    type="text"
                                    placeholder="Ingresar Direccion"
                                    value={ direccionUsuario }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputDireccion===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorDireccion }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Correo Electronico: </label>
                            <div className="contenedor-inputs-usuario">
                                <input 
                                    name="correoUsuario"
                                    className={ StatusInputCorreo===true? "input-error" : "inputsUsuario" }
                                    type="text"
                                    placeholder="Ingresar Email"
                                    value={ correoUsuario }
                                    onChange={ handleInputChange }
                                ></input>
                                <p className={ StatusInputCorreo===true? "mensaje-error" : "mensaje-error-oculto"}>
                                    { MsjErrorCorreo }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Contraseña: </label>
                            <div className="contenedor-inputs-usuario">
                                <Password 
                                    name="contraseñaUsuario"
                                    className="inputsUsuario"
                                    placeholder="Ingresar Contraseña"
                                    value={contraseñaUsuario} 
                                    onChange={(e) => setcontraseñaUsuario(e.target.value) } toggleMask
                                />
                               
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Confirmar Contraseña: </label>
                            <div className="contenedor-inputs-usuario">
                                <Password 
                                    name="contraseñaUsuarioConf"
                                    className="inputsUsuario"
                                    placeholder="Repetir Contraseña"
                                    value={contraseñaUsuarioConf} 
                                    onChange={(e) => setcontraseñaUsuarioConf(e.target.value)} toggleMask
                                />

                            </div>
                        </div>

                        <div className="contenedor-botones-usuario">
                            <button 
                                className="botonU boton-cancelar-usuario" 
                                type="button"
                            >
                                Cancelar
                            </button>
                            <button 
                                className="botonU boton-aceptar-usuario" 
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