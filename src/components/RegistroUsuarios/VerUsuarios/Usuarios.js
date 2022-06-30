import React, { useEffect, useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { eliminarUsuarios, getUsuariosHabilitados, getUsuariosHabilitadoss, ModificarUsuario } from "../../../service/apiUsuarios";
import { Confirmacion } from "../../Modal/Contenidos/Confirmacion";
import { ConfirmModal } from "../../Modal/Contenidos/ConfirmModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { RegistroUsuarios } from "../RegistroUsuarios";
import CamposTabla from "./CamposTabla";
import { ActualizarTablaUsuario } from './ActualizarTablaUsuario';

import './verUsuarios.css';
import { ModalEliminar } from "../../Modal/Contenidos/ModalEliminar";
import { UsuarioEliminado } from "../../Modal/Contenidos/UsuarioEliminado";




export const Usuarios = ({ data=[], setListaUsuariosHabilitados  }) => {

    const [usuariosTabla, setUsuariosTabla] = useState(data);
    const [search, setSearch] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);
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
    const [isOpenModalSuccess, OpenModalSuccess, CloseModalSuccess] = useModal(false)

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
 

    const [eliminarUsuarios, seteliminarUsuario] = useState('');
    
    const eliminarUsuario = (item) => {

        const eliminar = {
            ...item,
            estadoUsuario: 'Inhabilitado'
        }  
        console.log(item);
        seteliminarUsuario(eliminar);
        openModalConfirm();
    }

    const eliminar = () => {
        ModificarUsuario(eliminarUsuarios, OpenModalSuccess);
        closeModalConfirm();
    }

    

 useEffect(() => {
        setSearchFilter(usuariosTabla);
      }, [usuariosTabla]);
    
      useEffect(() => {
        function searchClassRoom() {
          const searchArr = [];
    
          usuariosTabla.forEach((data) => {
           
            if (data.name.toLowerCase().startsWith(search.toLowerCase())) {
                searchArr.push(data);
              }
          });
          setSearchFilter(searchArr);
        }
        searchClassRoom();
      }, [search]);
    
    function handleSearch(e) {
        const {value}=e.target
        
        if(value.trim()===""){
          setSearch(e.target.value);
        }
      
        setSearch(e.target.value);
      }


      //Paginador para la tabla
      const [paginaActual, setPaginaActual] = useState(0);

      const filtrarUsuarios = () => {

        return searchFilter.slice(paginaActual, paginaActual + 10);
      }

      const siguientePagina = () => {
            setPaginaActual( paginaActual + 10 );
      }

      const anteriorPagina = () => {
        if (paginaActual > 0)
            setPaginaActual( paginaActual - 10);
      }


    return (
        <>
        <div className="contenedor-tabla-general">
        <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar Usuarios"
                value={search}
               
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="btn btn-primary"
                id="basic-addon2"
              >
                Buscar
              </button>
            </div>

            <div className="contenedor-tabla-usuarios">

                <table>
                    <CamposTabla/>
                    <tbody>
                        {
                            filtrarUsuarios().map((item, i) => (
                                <tr key={item.id}>
                                    <td> { item.id } </td>
                                    <td style={{width:150}}> { item.name } </td>
                                    <td style={{width:150}}> { item.apellido } </td>
                                    <td style={{width:100}}> { item.cargoUsuario  } </td>
                                    <td style={{width:100}}> { item.telefonoUsuario } </td>
                                    <td style={{width:150}}> { item.direccionUsuario } </td>
                                    <td style={{width:150}}> { item.email } </td>
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
                                                // onClick={ () => {
                                                    // openModalConfirm(); 
                                                    // seteliminarUsu(item);  
                                                // }}
                                                // onClick={() => { 
                                                    // openModalConfirm();
                                                    // eliminarUsuario(item);}} 
                                                    onClick={() => {eliminarUsuario(item)}}
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
            <button className="botonPaginador" onClick={anteriorPagina}>
                    Anterior
            </button>
            
            <button className="botonPaginador" onClick={siguientePagina}>
                    Siguiente
            </button>
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
                        />
                    </ModalGenerico>
                }

                {
                    isOpenModalConfirm && 
                    <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm }>
                        <ModalEliminar cerrarModal={closeModalConfirm} eliminarUsuario={eliminar}/>
                    </ModalGenerico>
                } 
                <ModalGenerico isOpen={isOpenModalSuccess} closeModal={CloseModalSuccess}>
                    <UsuarioEliminado cerrarModal={CloseModalSuccess} idUsuario={eliminarUsuarios.id} listaUsuarios={usuariosTabla} setter={setUsuariosTabla}/>
                </ModalGenerico> 
        </div>
        
        </>
    );
};