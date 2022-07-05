import React, {useContext,useEffect,useState } from 'react'
import { controlarCampoNombre, controlarCampoApellido, controlarCampoTelefono, controlarCampoDireccion, controlarCampoCorreo, controlarCampoContraseniaConf, validarCamposVaciosUsuario} from '../../../helpers/validarRolUser';
import { useNavigate } from 'react-router-dom';
import "./editarperfilestilos.css";
import { Password } from 'primereact/password';
import { updateUsuario,getUsuarioId} from '../../../service/apiUsuarios'
import { AuthContext } from '../../../auth/authContext';
import { useModal } from "../../../hooks/useModal";
import { ModalGenerico } from "../../Modal/ModalGenerico";
import { AdvertenciaFormVacio } from "../../Modal/Contenidos/AdvertenciaFormVacio";
import { Confirmacion } from "../../Modal/Contenidos/Confirmacion";
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
//hooks
const [StatusInputNombre, setStatusInputNombre] = useState(false);
const [StatusInputApellido, setStatusInputApellido] = useState(false);
const [StatusInputTelefono, setStatusInputTelefono] = useState(false);
const [StatusInputDireccion, setStatusInputDireccion] = useState(false);
const [StatusInputCorreo, setStatusInputCorreo] = useState(false);
const [StatusInputContrasenia, setStatusInputContrasenia] = useState(false);
const [StatusInputContraseniaConf, setStatusInputContraseniaConf] = useState(false);

    //Hooks para controlar los modales
const [ isOpenModalConfirm, openModalConfirm, closeModalConfirm ] = useModal(false);
const [ isOpenModalWarning, openModalWarning, closeModalWarning ] = useModal(false);
const [ isOpenModalSuccess, openModalSuccess, closeModalSuccess ] = useModal(false);
const [ isOpenModalFormVacio, openModalFormVacio, closeModalFormVacio ] = useModal(false);

//errores
const [MsjErrorNombre, setMsjErrorNombre] = useState('');
const [MsjErrorApellido, setMsjErrorApellido] = useState('');
const [MsjErrorTelefono, setMsjErrorTelefono] = useState('')
const [MsjErrorDireccion, setMsjErrorDireccion] = useState('');
const [MsjErrorCorreo, setMsjErrorCorreo] = useState('');
const [MsjErrorContrasenia, setMsjErrorContrasenia] = useState('');
const [MsjErrorContraseniaConf, setMsjErrorContraseniaConf] = useState('');


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
const[botonActivo,setBotonActivo]=useState(false);

//Alertas
const alerta=(mensaje)=>{
  swal({
    title:mensaje,
    icon:"error"
  })
}

const redirigir =()=>{
  swal("Redirigiendo", {
    buttons: false,
    timer: 3000,
    icon:"success"
  });
}
//validaciones
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

const handleInputChange=(event)=>{
  setValues({
    ...formValues,
    [event.target.name] : event.target.value,
  }
  ) 
  if (event){
    setBotonActivo(true);
  } else{
    setBotonActivo(false);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
}
//redireccion
const navigate=useNavigate();

function handleNavigate() {
  setTimeout(()=>{
    navigate("/docente/home")
    // redirigir();
}, 3000);

    }

const evaluarInputs=()=>{
  if(StatusInputNombre===true||StatusInputApellido===true|| StatusInputCorreo===true||
    StatusInputDireccion===true||StatusInputTelefono===true||StatusInputContrasenia===true||StatusInputContraseniaConf===true){
    alerta("No se pudo guardar los datos.Intenta nuevamente")
  }else{
    actualizarDatos();
    localStorage.setItem('datos', JSON.stringify(formValues));
    setTimeout(()=>{
      window.location.reload(false);
      // redirigir();
  }, 3000);

  }
}

const validarForm = () => {
  if ( validarCamposVaciosUsuario(formValues) ) {
      openModalFormVacio();
  } else {
      evaluarInputs();
  }
}
const actualizarDatos=()=>{
  setStatePetition(true);
  updateUsuario(formValues,data.rol_id,data.cargoUsuario,'Habilitado',openModalSuccess,closeModalSuccess,data.id);
}

    return (
      <div className='form-container'>
        <div className='titulo-editar-perfil'>
        <h3>
        Editar Perfil
        </h3>
        </div>
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
                // className='inputs-perfil' 
                className={ StatusInputNombre===true? "input-errorperfil" : "inputs-perfil" }

                type="text" 
                value={nombreUsuario}
                onChange={handleInputChange}
                ></input>
                <p className={ StatusInputNombre===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorNombre }
                                </p>
                 </div>
			</div>
			<div className='rigth-item'>
			   <label>Apellido(s)*</label>
                <div className='input-perfil'>
                  <input 
                  name='apellidoUsuario'
                  placeholder='apellido' 
                  className={ StatusInputApellido===true? "input-errorperfil" : "inputs-perfil" }

                  // className='inputs-perfil' 
                  type="text" 
                  value={apellidoUsuario} 
                  onChange={handleInputChange}
                  ></input>
                  <p className={ StatusInputApellido===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorApellido }
                                </p>
                </div>
			</div>
        </div>

		<div className='item-container'>

            <div className='phonenumber'>
            <label>Celular*</label>
            <div className='input-perfil'>
            <input name='telefonoUsuario'
             placeholder='61620541' 
            //  className='inputs-perfil' 
            className={ StatusInputTelefono===true? "input-errorperfil" : "inputs-perfil" }
             type="text"
            value={telefonoUsuario}
            onChange={handleInputChange}
            ></input>
             <p className={ StatusInputTelefono===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorTelefono }
                                </p>
            </div>
            </div>

            <div className='rigth-item'>
            <label>Direccion*</label>
            <div className='input-perfil'>
            <input name='direccionUsuario'
             placeholder='Av.Panamericana' 
            // className='inputs-perfil' 
            className={ StatusInputDireccion===true? "input-errorperfil" : "inputs-perfil" }
            type="text"
            value={direccionUsuario}
            onChange={handleInputChange}
            ></input>
              <p className={ StatusInputDireccion===true? "mensaje-error" : "mensaje-error-oculto" }>
                                    { MsjErrorDireccion }
                                </p>
            </div>
            </div>
	    </div>
            <div className='correo'>
            <label>Correo electronico*</label>
            <div className='input-perfil'>
            <input name='correoUsuario' 
            placeholder='Ingresar correo' 
            // className='input-email'
            className={ StatusInputCorreo===true? "input-errorperfilemail" : "input-email" }

            value={correoUsuario}
            onChange={handleInputChange}
            ></input>
            <p className={ StatusInputCorreo===true? "mensaje-error" : "mensaje-error-oculto"}>
                                    { MsjErrorCorreo }
                                </p>
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
              // className={ "input-perfil" }
              className={ StatusInputContrasenia===true? "input-errorperfil" : "inputs-perfil" }

              placeholder="Contraseña"
              value={contraseñaUsuario} 
              onChange={ handleInputChange } toggleMask
                                />
               <p className={ StatusInputContrasenia===true? "mensaje-error" : "mensaje-error-oculto" }>
                  { MsjErrorContrasenia }
                 </p>
            </div>
            <div className='rigth-item'>
             <label>Confirmar Contraseña*</label>
            <Password 
            inputStyle={{width:'300px',height:'40px',borderRadius: '7px',
            border: '1.5px solid rgb(55, 157, 252)', backgroundColor:'white'}}
              name="contraseñaUsuarioConf"
              // className={ "" }
              className={ StatusInputContraseniaConf===true? "input-errorperfil" : "inputs-perfil" }
              placeholder="Repetir Contraseña"
              value={contraseñaUsuarioConf} 
              onChange={ handleInputChange } toggleMask
                                />
             <p className={ StatusInputContraseniaConf===true? "mensaje-error" : "mensaje-error-oculto" }>
              { MsjErrorContraseniaConf }
              </p>                   

          </div>
			</div>

        <div className='contenedor-botonesPerfil'>
          <div className='container-guardarperfil'>
            <button
            disabled={!botonActivo}
             id='btn-opciones-soliperfil'
             className={ botonActivo===true? "btn-guardarperfilactivo":"btn-guardarperfilinactivo"}
            //  'btn-guardarperfil'
            onClick={()=> validarForm() }
            >
              Guardar</button>
              </div>   
        </div>
        </div>
      </form>
      <ModalGenerico isOpen={ isOpenModalFormVacio } closeModal={ closeModalFormVacio }>
                <AdvertenciaFormVacio cerrarModal={ closeModalFormVacio } />
            </ModalGenerico>

            <ModalGenerico isOpen={ isOpenModalConfirm } closeModal={ closeModalConfirm }>
                <Confirmacion cerrarModal={ closeModalConfirm }  />
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalWarning } closeModal={ closeModalWarning }>
                <ErrorGuardarDatos cerrarModal={ closeModalWarning }/>
            </ModalGenerico>
            <ModalGenerico isOpen={ isOpenModalSuccess } closeModal={ closeModalSuccess }>
                <Hecho cerrarModal={ closeModalSuccess }/>
            </ModalGenerico>
      </div>
    )
  
}

