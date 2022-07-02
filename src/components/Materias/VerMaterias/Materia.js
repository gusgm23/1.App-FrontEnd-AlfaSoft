import React, { useEffect, useState } from 'react'

import './estilos-ver-materias.css'
import { useModal } from '../../../hooks/useModal';
import { ModalGenerico } from '../../Modal/ModalGenerico';
import { FormRegistroMateria } from '../RegistroMateria/FormRegistroMateria';
import { NavLink } from 'react-router-dom';

export const Materia = ({data=[], setListaMateria}) => {

    const [values, setValues] = useState({
        codigoMat:'',
        nombreMat:'',
        id: '', 
    });

    const { codigoMat, nombreMat, id, estado } = values;
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);
    const [search, setSearch] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);
    const actualizar = (item) => {
        setValues({
            codigoMat: item.codigoMateria,
            nombreMat: item.nombreMateria,
            id: item.id
        });
        openModalEdicion();
    }
    
    const guardarID  = (id) => {
        localStorage.setItem("id", id);
    }
    useEffect(() => {
        setSearchFilter(data);
      }, [data]);
    
      useEffect(() => {
        function searchClassRoom() {
          const searchArr = [];
    
          data.forEach((data) => {
           
            if (data.nombreMateria.toLowerCase().startsWith(search.toLowerCase())) {
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
            
            <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar Materias"
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
            <div className='contenedor-tabla'>
                <table>
                    <thead>
                        <tr className='titulo-tabla'>
                            <th>#</th>
                            <th>Codigo SIS</th>
                            <th>Materia</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody className='animate__animated animate__fadeIn'>
                        {
                            filtrarUsuarios().map((item, i) => (
                                <tr key={item.id}>
                                    <td> { item.id } </td>
                                    <td> { item.codigoMateria } </td>
                                    <td style={{width:250}}> { item.nombreMateria } </td>
                                    <td> { item.estadoMateria } </td>
                                    <td className='td-btns'>
                                        <section className='caja-btns-materia'>
                                            <button 
                                                className='editar-materia'
                                                onClick={ () => {actualizar(item)} }
                                            >
                                                <i className="bi bi-pencil-fill"></i>
                                            </button>
                                            <button 
                                                className='btn-editar editar-mat btn-ver-mat'
                                                onClick={() => (guardarID(item.id))}
                                                >
                                                    <NavLink exact='true' to='/admin/vergrupos' ><i className="bi bi-eye-fill"></i></NavLink>
                                            </button>
                                        </section>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="contenedorBtnPaginadorMateria">
                <button className="botonPaginadorMateria" onClick={anteriorPagina}>
                        Anterior
                </button>

                <button className="botonPaginadorMateria" onClick={siguientePagina}>
                        Siguiente
                </button>
            </div>
            {
                isOpen &&
                <ModalGenerico isOpen={ isOpen } closeModal={closeModalEdicion}>
                    <FormRegistroMateria 
                        codiSis={codigoMat} 
                        materi={nombreMat} 
                        closeModal={closeModalEdicion} 
                        titulo='Editar' 
                        idMat={id}
                        dataOptenida={data}
                        setListaMateria={setListaMateria}
                    />
                </ModalGenerico>
            }
            </>
    )
}
