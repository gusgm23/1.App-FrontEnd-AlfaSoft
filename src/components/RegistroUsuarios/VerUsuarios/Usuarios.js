import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { RegistroUsuarios } from "../RegistroUsuarios";

import './verUsuarios.css';



export const Usuarios = ({ data=[], setListaUsuariosHabilitados }) => {

    const [ valores, setValores ] = useState({
        id:                 '',
        nomUsuario:         '',
        apeUsuario:         '',
        telUsuario:         '',
        dirUsuario:         '',
        emailUsuario:       '',
        estUsuarios:        '',
        pasUsuario:         '',
        pasConfUsuario:     '',
    });

    const { id, nomUsuario, apeUsuario, telUsuario, dirUsuario, emailUsuario, estUsuarios, pasUsuario, pasConfUsuario } = valores;
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);

    const actualizarUsuario = ( campo ) => {
        setValores({
            id:                 campo.id,
            nomUsuario:         campo.name,
            apeUsuario:         campo.apellido,
            telUsuario:         campo.telefonoUsuario,
            dirUsuario:         campo.direccionUsuario,
            emailUsuario:       campo.email,
            estUsuarios:        campo.estadoUsuario,
            pasUsuario:         campo.password,
            pasConfUsuario:     campo.repeatPassword,
        });
        openModalEdicion();
    }

    const guardarIdUsuario = (id) => {
        localStorage.setItem("id", id);
    }

    return (
        <div className="contenedor-tabla-general">
            <div className="contenedor-tabla-usuarios">
                <table>
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Email</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((campo, i) => (
                                <tr key={campo.id}>
                                    <td> { i+1 } </td>
                                    <td> { campo.name } </td>
                                    <td> { campo.apellido } </td>
                                    <td> { campo.telefonoUsuario } </td>
                                    <td> { campo.direccionUsuario } </td>
                                    <td> { campo.email } </td>
                                    <td> { campo.estadoUsuario } </td>
                                    <td className="columna-botones-usuario">
                                        <section className="caja-botones-usuario">
                                            <button
                                                className="boton-editar-usuarios"
                                                onClick={ () => { actualizarUsuario(campo) } }
                                            >
                                            <i className="bi bi-pencil-fill"></i>
                                            </button>
                                        </section>
                                        <section className="caja-botones-usuario">
                                            <button
                                                className="boton-editar-usuarios"
                                                //onClick={ () => { actualizarUsuario(campo) } }
                                            >
                                            <i className="bi bi-trash-fill"></i>
                                            </button>
                                        </section>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                isOpen && 
                <ModalGenerico isOpen={ isOpen } closeModal={ closeModalEdicion }>
                    <RegistroUsuarios
                        titulo='Editar Campos de'
                        idUsu={ id }
                        nom={ nomUsuario }
                        ape={ apeUsuario  }
                        tel={ telUsuario  }
                        dir={ dirUsuario  }
                        cor={ emailUsuario }
                        con={ pasUsuario }
                        conConf={ pasConfUsuario }
                        dataOptenida={ data }
                        setListaUsuariosHabilitados={ setListaUsuariosHabilitados }
                    />
                </ModalGenerico>
            }
        </div>
    )

}