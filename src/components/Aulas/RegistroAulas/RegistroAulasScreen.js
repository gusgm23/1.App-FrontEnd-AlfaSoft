import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { useModal } from '../../../hooks/useModal'
import { ModalGenerico } from '../../Modal/ModalGenerico'

import './estilosRegistroAula.css'
import { AdvertenciaFormVacio } from '../../Modal/Contenidos/AdvertenciaFormVacio'
import { validarCamposLlenosAula, validarCamposVaciosAula } from '../../../helpers/validarForms'
import { Confirmacion } from '../../Modal/Contenidos/Confirmacion'
import { FormRegistroAula } from './FormRegistroAula'

export const RegistroAulasScreen = () => {
    
    return(
        <div className='componente'>
            <FormRegistroAula/>
        </div>
    )

}
