import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { eliminarUsuarios, ModificarUsuario } from "../../../service/apiUsuarios";
import { Confirmacion } from "../../Modal/Contenidos/Confirmacion";
import { ConfirmModal } from "../../Modal/Contenidos/ConfirmModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { RegistroUsuarios } from "../RegistroUsuarios";
import CamposTabla from "./CamposTabla";

import './verUsuarios.css';




export const Usuarios = ({ data=[], setListaUsuariosHabilitados }) => {

    const [ valores, setValores ] = useState({
        id:                 '',
        nomUsuario:         '',
        apeUsuario:         '',
        telUsuario:         '',
        dirUsuario:         '',
        emailUsuario:       '',
        pasUsuario:         '',
        pasConfUsuario:     '',
        carUsuario:         '',

    });

    const { id, nomUsuario, apeUsuario, telUsuario, dirUsuario, emailUsuario, pasUsuario, pasConfUsuario, carUsuario } = valores;
    
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);
    const [ isOpenModalConfirm, openModalConfirm, closeModalConfirm ] = useModal(false); 
    
    //Hook para eliminar usuarios
    const [ eliminarUsu, seteliminarUsu ] = useState({});
    const [ datas, setdata ] = useState([]);
    const [ mostrarMensaje, setmostrarMensaje] = useState({
        title: "",
        message: "",
        status: false,
    });


    const actualizarUsuario = ( item ) => {
        setValores({
            id:                 item.id,
            nomUsuario:         item.name,
            apeUsuario:         item.apellido,
            telUsuario:         item.telefonoUsuario,
            dirUsuario:         item.direccionUsuario,
            emailUsuario:       item.email,
            pasUsuario:         item.password,
            pasConfUsuario:     item.repeatPassword,
            carUsuario:         item.cargoUsuario,
        });
        openModalEdicion();
    }
 


    // const eliminarUsuario = (item) => {
        // const eliminar = {
            // ...item,
            // estadoUsuario: 'Inhabilitado'
        // }  
        // ModificarUsuario(eliminar)
        // closeModalConfirm();
    // }

    function eliminacionDeUsuarios() {
        const {id, name} = eliminarUsu;
        eliminarUsuarios(id)
        .then((response) => {
            const actualizarDatos = data.filter((usuario) => usuario.id !== id );
            setdata(actualizarDatos);

            setmostrarMensaje({
                title: 'Eliminacion Exitosa!',
                message: `Se elimino el usuario ${name}`,
                status: true,
                type: "success",
            });
            closeModalConfirm();
        })
        setTimeout(() => {
            setmostrarMensaje({
                ...mostrarMensaje,
                status: false,
            });
        }, 3000);
    }




    return (
        <>

        <div className="contenedor-tabla-general">
            <div className="contenedor-tabla-usuarios">
                <table>
                    <CamposTabla/>
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
                                                onClick={ () => {
                                                    openModalConfirm(); 
                                                    seteliminarUsu(item);  
                                                }}
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
            <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm } >
                <ConfirmModal 
                    title={'¿Esta seguro de eliminar?'}
                    cancel={() => {
                        closeModalConfirm();
                    }}
                    confirm={() => {
                        eliminacionDeUsuarios();
                    }}
                />
            </ModalGenerico>
        </div>
        </>
    )

}