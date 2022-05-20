import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./registroUsuarioEstilos.css";
import { Password } from 'primereact/password';
import 'primeicons/primeicons.css';


import { controlarCampoNombre, controlarCampoApellido, controlarCampoTelefono, controlarCampoDireccion, controlarCampoCorreo, controlarCampoContraseniaConf } from '../../helpers/validarRolUser';

//Importar las APIs de obtener los roles
import { getRolesHabilitados, createUsuario, updateUsuario,  } from '../../service/apiRoles';
import { ObtenerRoles } from "./ObtenerRoles";

export const RegistroUsuarios = ({

    nom =   '',
    ape =   '',
    tel =   '',
    dir =   '',
    cor =   '',
    con =   '',
    conConf='',

    closeModal = () => {}, titulo='', idUsu='', 
}) => {

    const [formValues, handleInputChange, reset] = useForm({
        nombreUsuario:              nom,
        apellidoUsuario:            ape,
        telefonoUsuario:            tel,
        direccionUsuario:           dir,
        correoUsuario:              cor,
        contraseñaUsuario:          con,
        contraseñaUsuarioConf:      conConf,
        
    })

    const { nombreUsuario, apellidoUsuario, telefonoUsuario, direccionUsuario, correoUsuario, contraseñaUsuario, contraseñaUsuarioConf } = formValues;

    //Hooks para controlar los contenidos de los campos
    const [StatusInputNombre, setStatusInputNombre] = useState(false);
    const [StatusInputApellido, setStatusInputApellido] = useState(false);
    const [StatusInputTelefono, setStatusInputTelefono] = useState(false);
    const [StatusInputDireccion, setStatusInputDireccion] = useState(false);
    const [StatusInputCorreo, setStatusInputCorreo] = useState(false);
    const [StatusInputContrasenia, setStatusInputContrasenia] = useState(false);
    const [StatusInputContraseniaConf, setStatusInputContraseniaConf] = useState(false);
    

    //Hooks para mostrar el mensaje de error en los campos
    const [MsjErrorNombre, setMsjErrorNombre] = useState('');
    const [MsjErrorApellido, setMsjErrorApellido] = useState('');
    const [MsjErrorTelefono, setMsjErrorTelefono] = useState('')
    const [MsjErrorDireccion, setMsjErrorDireccion] = useState('');
    const [MsjErrorCorreo, setMsjErrorCorreo] = useState('');
    const [MsjErrorContrasenia, setMsjErrorContrasenia] = useState('');
    const [MsjErrorContraseniaConf, setMsjErrorContraseniaConf] = useState('');


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
            controlarCampoCorreo( correoUsuario, setStatusInputCorreo, setMsjErrorCorreo );
        }
    }, [correoUsuario])

    useEffect(() => {
        if( contraseñaUsuario === '') {
            setStatusInputContrasenia(false);
        }else if ( contraseñaUsuarioConf === '' ) {
            setStatusInputContraseniaConf(false);
        } else {controlarCampoContraseniaConf(
                contraseñaUsuario, contraseñaUsuarioConf, setStatusInputContrasenia, setStatusInputContraseniaConf, setMsjErrorContrasenia, setMsjErrorContraseniaConf
            ); 
        }
    }, [contraseñaUsuario, contraseñaUsuarioConf])





    //Hook para obtener el select de obtener roles
    const [ selectsRoles, setselectsRoles ] = useState('Registrar Cargo');

    //Obtener los roles y listarlos
    const [ListaRolesHabilitados, setListaRolesHabilitados ] = useState({
        state: false,
        data: []
    });

    const {state, data} = ListaRolesHabilitados;

    useEffect(() => {
        getRolesHabilitados(setListaRolesHabilitados);
    }, [state]);


    return (

        <div className="contenedor-registro-usuarios">
            <h1 className="titulo-registro-usuarios"> { titulo === ''? 'Registro de Nuevos Usuarios' : `${titulo} Usuarios       ` } </h1>
            <form name="f1">
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
                                <ObtenerRoles data={ data } selectsRoles={ selectsRoles } setselectsRoles={ setselectsRoles } />
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
                                    className={ StatusInputContrasenia===true? "input-error" : "inputsUsuario" }
                                    placeholder="Ingresar Contraseña"
                                    value={contraseñaUsuario} 
                                    onChange={ handleInputChange } toggleMask
                                    //onChange={(e) => setcontraseñaUsuario(e.target.value) } toggleMask
                                />
                                <p className={ StatusInputContrasenia===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorContrasenia }
                                </p>
                            </div>
                        </div>
                        <div className="campos-registro-usuario">
                            <label className="labels-usuario"> Confirmar Contraseña: </label>
                            <div className="contenedor-inputs-usuario">
                                <Password 
                                    
                                    name="contraseñaUsuarioConf"
                                    className={ StatusInputContraseniaConf===true? "input-error" : "inputsUsuario" }
                                    placeholder="Repetir Contraseña"
                                    value={contraseñaUsuarioConf} 
                                    onChange={ handleInputChange } toggleMask
                                    //onChange={(e) => setcontraseñaUsuarioConf(e.target.value)} toggleMask
                                />
                                <p className={ StatusInputContraseniaConf===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorContraseniaConf }
                                </p>
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