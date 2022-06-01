import React from "react";

import './registroUsuarioEstilos.css';


export const ObtenerRoles = ({ data=[], selectsRoles, setselectsRoles }) => {


    return (
        <select
            name="CargoUsuario"
            className="inputsUsuario"
            placeholder="ELegir un Rol"
            value={selectsRoles}
            onChange={ e => setselectsRoles(e.target.value) }
        >
            <option> Seleccionar Rol. </option>
            {
                data.map(( rol ) => (
                <option key={rol.id} value={rol.rol}> {rol.rol} </option> ))
            }
        </select>
    )
}