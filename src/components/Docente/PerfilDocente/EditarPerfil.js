import React, {useContext,useEffect,useState } from 'react'
import "./editarperfilestilos.css";
import { Password } from 'primereact/password';

import { updateUsuario,getUsuarioId} from '../../../service/apiUsuarios'
import { AuthContext } from '../../../auth/authContext';
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { ErrorGuardarDatos } from "../../Modal/Contenidos/ErrorGuardarDatos";
import { Hecho } from "../../Modal/Contenidos/Hecho";
import swal from 'sweetalert';

export const EditarPerfil = ({
  nom= '',
  ape='',
  tel='',
  dir='',
  cor='',
  con='',
  conf=''

}) => {
  const{user}= useContext (AuthContext);
  const [usuario, setUsuario ] = useState({
    state: false,
    data: []
  });
  
  const {state, data} = usuario;
  
  useEffect(() => {
    getUsuarioId(setUsuario,user.idDocente);
    // localStorage.setItem('datos', JSON.stringify(data));
  
  }, [state]);
const [ StatePetition, setStatePetition ] = useState(false);



const [formValues,setValues] = useState({
  
  nombreUsuario: nom,
  apellidoUsuario: ape,
  telefonoUsuario: tel,
  direccionUsuario: dir,
  correoUsuario: cor,
  contraseñaUsuario: con,
  contraseñaUsuarioConf: conf

})
 const { nombreUsuario,
apellidoUsuario, telefonoUsuario, direccionUsuario, correoUsuario,contraseñaUsuario, contraseñaUsuarioConf } = formValues;


//Alertas
const alerta=(mensaje)=>{
  swal({
    title:mensaje,
    icon:"error"
  })
}
const alertaSuccess=()=>{
  swal({
    title:"Datos guardados vuelva a ingresar para ver los cambios",
    icon:"success"
  })
}

//Validaciones
const tele = new RegExp("^[67]{1}[0-9]{7}$");
const apel = new RegExp("^[a-zA-Z ]+$");
const corre = new RegExp('^(.+)@(\\S+)$');

const recargar=()=>{
  setTimeout(function() {
    window.location.reload(true);
  }, 3000);
}
// const cambios=()=>{
//   if (nombreUsuario===nombreUsuario || apellidoUsuario===pellidoUsuario||telefonoUsuario===telefonoUsuario
//   ||direccionUsuario===direccionUsuario||correoUsuario===correoUsuario ||contraseñaUsuario===ontraseñaUsuario||contraseñaUsuarioConf===contraseñaUsuarioConf){
//   }
// }

const validacionCampos=()=>{
  if (nombreUsuario==='' || apellidoUsuario===''||telefonoUsuario===''
  ||direccionUsuario===''||correoUsuario===''||contraseñaUsuario===''||contraseñaUsuarioConf===''){
    alerta("Existen campos vacios")
  }
  // else if (nombreUsuario===nombreUsuario || apellidoUsuario===apellidoUsuario||telefonoUsuario===telefonoUsuario
  //   ||direccionUsuario===direccionUsuario||correoUsuario===correoUsuario ||contraseñaUsuario===contraseñaUsuario||contraseñaUsuarioConf===contraseñaUsuarioConf){
  // }
 else if (nombreUsuario.length <3 || apellidoUsuario.length<3){
  alerta("La longitud del nombre/apellido debe ser mayor a 3")
 }
 else if(!apel.test(nombreUsuario)|| !apel.test(apellidoUsuario)){
  alerta("Los nombres/apellidos solo contienen letras")
 }
 else if (!tele.test(telefonoUsuario)){
  alerta("Los numeros de celular empiezan con 6 o 7 y contienen 8 digitos")
 }
 else if ( direccionUsuario.length<5 || direccionUsuario.length>=50){
  alerta("La direccion debe estar entre 5 y 50 caracteres")
 }
 else if(!corre.test(correoUsuario )){
  alerta("Correo invalido. Ejm: xxxxx@fcyt.umss.edu.bo o xxxxx@est.umss.edu")
 }
 else if(contraseñaUsuario.length<6 || contraseñaUsuarioConf.length<6 ){
   alerta("La contraseña debe tener minimo 6 caracteres")
 }
 else if(contraseñaUsuario!== contraseñaUsuarioConf){
  alerta("Las contraseñas deben coincidir")
 }
 else{
  actualizarDatos();
  localStorage.setItem('datos', JSON.stringify(formValues));
  //recargar();
  // window.location.reload();

 }

}
var modified;
const handleInputChange=(event)=>{
  setValues({
    ...formValues,
    [event.target.name] : event.target.value,

  })  
}

const handleSubmit = (e) => {
  e.preventDefault();
}
const [ isOpenModalSuccess, openModalSuccess, closeModalSuccess ] = useModal(false);
const [ isOpenModalWarning, openModalWarning, closeModalWarning ] = useModal(false);


const actualizarDatos=(item)=>{
  setStatePetition(true);
  updateUsuario(formValues,data.rol_id,data.cargoUsuario,'Habilitado',openModalSuccess,closeModalSuccess,data.id);
}



    return (
      <div className='form-container'>
        <h1>
        Editar Perfil
        </h1>
        <form
        onSubmit={handleSubmit}
        >
        <div className='inputs-container'>
        <div className='item-container'>
			<div>
                 <label>Nombre(s)*</label>
                 <div className='input'>
                <input 
                name='nombreUsuario'
                placeholder='nombre' 
                className='inputs-perfil' 
                type="text" 
                value={nombreUsuario}
                onChange={handleInputChange}
                ></input>
                 </div>
			</div>
			<div className='rigth-item'>
			   <label>Apellido(s)*</label>
                <div className='input-perfil'>
                  <input 
                  name='apellidoUsuario'
                  placeholder='apellido' 
                  className='inputs-perfil' 
                  type="text" 
                  value={apellidoUsuario} 
                  onChange={handleInputChange}
                  ></input>
                </div>
			</div>
        </div>

		<div className='item-container'>

            <div className='phonenumber'>
            <label>Celular*</label>
            <div className='input-perfil'>
            <input name='telefonoUsuario' placeholder='77777777' className='inputs-perfil' type="text"
            value={telefonoUsuario}
            onChange={handleInputChange}
            ></input>
            </div>
            </div>
            <div className='rigth-item'>
            <label>Direccion*</label>
            <div className='input-perfil'>
            <input name='direccionUsuario' placeholder='Av.Panamericana' className='inputs-perfil' type="text"
            value={direccionUsuario}
            onChange={handleInputChange}
            ></input>
            </div>
            </div>
	    </div>
            <div className='correo'>
            <label>Correo electronico*</label>
            <div className='input-perfil'>
            <input name='correoUsuario' placeholder='alfasoft@gmail.com' className='input-email'
            value={correoUsuario}
            onChange={handleInputChange}
            ></input>
            </div>
            </div>
			<div className='item-container'>
            <div className='password'>
            <label>Contraseña*</label>
            <Password 
            style={ { } }
            inputStyle={{width:'300px',height:'40px',borderRadius: '7px',
            border: '1.5px solid rgb(55, 157, 252)', backgroundColor:'white'}}
              name="contraseñaUsuario"
              className={ "input-perfil" }
              placeholder="Contraseña"
              value={contraseñaUsuario} 
              onChange={ handleInputChange } toggleMask
                                />
            </div>
            <div className='rigth-item'>
             <label>Confirmar Contraseña*</label>
            <Password 
            inputStyle={{width:'300px',height:'40px',borderRadius: '7px',
            border: '1.5px solid rgb(55, 157, 252)', backgroundColor:'white'}}
              name="contraseñaUsuarioConf"
              className={ "" }
              placeholder="Repetir Contraseña"
              value={contraseñaUsuarioConf} 
              onChange={ handleInputChange } toggleMask
                                />

          </div>
			</div>

        <div className='contenedor-botonesPerfil'>
          <div className='container-guardarperfil'>
            <button
             id='btn-opciones-soliperfil'
             className='btn-guardarperfil'
              // onClick={()=> validacionCampos()}
            onClick={()=> console.log(handleInputChange) }
            >
              Guardar</button>
              </div>   
        </div>
        </div>
      </form>
      <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning }>
                <ErrorGuardarDatos cerrarModal={ closeModalWarning }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess }/>
            </ModalGenerico>
      </div>
    )
  
}

