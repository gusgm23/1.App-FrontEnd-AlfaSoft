import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { getSolicitudPendiente } from '../../service/apiSolicitudAulas';
import { types } from "../../types/types";


//este comentario es para pruebas 


export const ContenidoNavAdmin = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: types.logout });

    navigate("login", {
      replace: true,
    });
  };

  const [solicitudesPendientes, setSolicitudesPendientes] = useState({
    state: false,
    data : []
})

const { data } = solicitudesPendientes;

useEffect(() => {
    
    getSolicitudPendiente(setSolicitudesPendientes);

}, [])

  return (
    <>
      <div >
        <div>
          <Link to="/admin/adminhome" className="navbar-brand">
           Sistema Reserva de Aulas
          </Link>
          <div className="nav-container">
            <NavLink
              exact="true"
              to="/admin/verusarios"
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "no-active")
              }
            >

              Ver Usuarios
            </NavLink>
            {/*<NavLink 
                        exact='true'
                        to='/admin/registroaula' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : 'no-active' )}
                    >
                        Registrar Aula
                    </NavLink>*/}

            <NavLink
              exact="true"
              to="/admin/versolicitudes"
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "no-active")
              }
            >
              Solicitudes
            </NavLink>
            <NavLink
              exact="true"
              to="/admin/veraulas"
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "no-active")
              }
            >
              Aulas
            </NavLink>
            <NavLink
              exact="true"
              to="/admin/vermaterias"
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "no-active")
              }
            >
              Materias
            </NavLink>
            {/* <NavLink 
                        exact='true' 
                        to='/admin/administrarsolicitud' 
                        className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : 'no-active' )}
                    >
                            admin soli
                </NavLink> */}
          </div>
        </div>
      </div>

      <div className="navbar-collapse collapse w-300 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav">
          <div className="dropdown notification-info  text-info icon-home">
            
            <span
              className=""
              id="notification"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-bell icon-bell"></i>
                (<b>{data.length}</b>)
            </span>
            <section
              className="dropdown-menu notification-container"
              aria-labelledby="notification"
            >
              <section>Notificaciones</section>
              <div style={{background:"#d3d4d4" ,height:"1px"}}></div>
                <NavLink style={{color:"black"}} to="/admin/versolicitudes">
                    <li className='notification-item'>
                      Tienes <b>{data.length}</b> solicitudes de
                      reserva de aulas pendientes!
                    </li>
                </NavLink>
            </section>
          </div>

          <span className="nav-item nav-link text-info icon-home">
            <i className="bi bi-person icon-user"></i> {user.name} - {user.rol}
          </span>
          <button
            className="nav-item nav-link btn-logout"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right icon-logout"></i>
          </button>
        </ul>
      </div>
    </>
  );
};
