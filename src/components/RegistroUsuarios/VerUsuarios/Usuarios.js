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
        carUsuario: '',
    });

    const { id, nomUsuario, apeUsuario, telUsuario, dirUsuario, emailUsuario, estUsuarios, pasUsuario, pasConfUsuario, carUsuario } = valores;
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);

    const actualizarUsuario = ( item ) => {
        setValores({
            id:                 item.id,
            nomUsuario:         item.name,
            apeUsuario:         item.apellido,
            telUsuario:         item.telefonoUsuario,
            dirUsuario:         item.direccionUsuario,
            emailUsuario:       item.email,
            estUsuarios:        item.estadoUsuario,
            pasUsuario:         item.password,
            pasConfUsuario:     item.repeatPassword,
            carUsuario:         item.cargoUsuario,
        });
        openModalEdicion();
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
                            <th>Cargo</th>
                            <th>Telefono</th>
                            <th>Direccion</th>
                            <th>Email</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) => (
                                <tr key={item.id}>
                                    <td> { i+1 } </td>
                                    <td> { item.name } </td>
                                    <td> { item.apellido } </td>
                                    <td> { item.cargoUsuario  } </td>
                                    <td> { item.telefonoUsuario } </td>
                                    <td> { item.direccionUsuario } </td>
                                    <td> { item.email } </td>
                                    <td className="columna-botones-usuario">
                                        <section className="caja-botones-usuario">
                                            <button
                                                className="boton-editar-usuarios"
                                                onClick={ () => { actualizarUsuario(item) } }
                                            >
                                            <i className="bi bi-pencil-fill"></i>
                                            </button>
                                        </section>
                                        <section className="caja-botones-usuario">
                                            <button
                                                className="boton-editar-usuarios"
                                                //onClick={ () => { eliminarUsuario(item) } }
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
                        cargoUsuario={ carUsuario }
                        tel={ telUsuario  }
                        dir={ dirUsuario  }
                        cor={ emailUsuario }
                        con={ pasUsuario }
                        conConf={ pasConfUsuario }
                        closeModal={ closeModalEdicion }
                        dataOptenida={ data }
                        setListaUsuariosHabilitados={ setListaUsuariosHabilitados }
                    />
                </ModalGenerico>
            }
        </div>
    )

}