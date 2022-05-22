
import React, { useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import './listarSolicitudes.css';
import {getSolicitud} from '../../service/apiSolicitudAulas';
import { FormularioReservaAula } from './FormularioReservaAula';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'bootstrap';
import { Row } from 'primereact/row';
import { ColumnGroup } from 'primereact/columngroup';
import 'primeicons/primeicons.css';
import { ModalGenerico } from '../Modal/ModalGenerico';


export const ListarSolicitudes = ({  }) => {

    const [Valores, setValores] = useState({
        id:                     '',
        nombreSoli:             '',
        apellidoSoli:           '',
        numeroSoli:             '',
        motivoSoli:             '',
        fechaSoli:              '',
        horaSol:                '',
        periodoSoli:            '',
        estadoSoli:             '',
        materiaSoli:            '',
        grupoSoli:              '',
    });

    const { id,           
            nombreSoli,   
            apellidoSoli, 
            numeroSoli,   
            motivoSoli,   
            fechaSoli,    
            horaSol,      
            periodoSoli,  
            estadoSoli,   
            materiaSoli,  
            grupoSoli,     
        } = Valores;
    const [ isOpen, openModalEdicion, closeModalEdicion ] = useModal(false);




    const [ListarSolicitudes, setListaSolicitud] = useState({
        state: false,
        data: []
    });     

    const {state, data} =  ListarSolicitudes;

    useEffect(() => {
        getSolicitud(setListaSolicitud);
    }, [state]);




    //Para mostrar los botones en la tabla 
    const detallesSolicitud = (item) => {
        setValores({
            id:             item.id,                       
            nombreSoli:     item.nombreDocenteSolicitud,    
            apellidoSoli:   item.apellidoDocenteSolicitud,  
            numeroSoli:     item.numeroEstudiantesSolicitud,
            motivoSoli:     item.motivoSolicitud,          
            fechaSoli:      item.fechaSolicitud,            
            horaSol:        item.horaInicioSolicitud,       
            periodoSoli:    item.periodoSolicitud,          
            estadoSoli:     item.estadoSolicitud,           
            materiaSoli:    item.materiaSolicitud,          
            grupoSoli:      item.grupoSolicitud,            
        });
        openModalEdicion();
    }

    const actionBodyTemplate = (item) => {
        return (
            <div className="actions">
                <Button 
                    icon="pi pi-pencil" 
                    style={{'background': '#13af4e'}} 
                    className="p-button-rounded p-button-success mr-2"   
                    onClick={() => (detallesSolicitud(item))} />
                
            </div>
        );
    }
    

    //Estilos para la tabla de las solicitudes
    const renderGroup = () => {
        return (
            <ColumnGroup>
                {/* <Row> */}
                    {/* <Column header={showHeader} colSpan={4}></Column> */}
                {/* </Row> */}
                <Row>
                    <Column header="ID"                     field="id"                           sortable style={{ 'color': 'white', 'backgroundColor': 'black', width:'8%'}}   />
                    <Column header="Numero de Est."         field="numeroEstudiantesSolicitud"   sortable style={{ 'color': 'white', 'backgroundColor': 'black', width:'15%'}}   />
                    <Column header="Motivo de Solicitud"    field="motivoSolicitud"              sortable style={{ 'color': 'white', 'backgroundColor': 'black', width:'30%'}}   />
                    <Column header="Fecha de Solicitud"     field="fechaSolicitud"               sortable style={{ 'color': 'white', 'backgroundColor': 'black', width:'15%'}}   />
                    <Column header="Hora de Solicitud"      field="horaInicioSolicitud"          sortable style={{ 'color': 'white', 'backgroundColor': 'black', width:'15%'}}   />
                    <Column header="Opciones"                                       style={{ 'color': 'white', 'backgroundColor': 'black', width:'25%'}}/>
                </Row>
            </ColumnGroup>
        )
    }
    const headerGroup = renderGroup();


    return(
        <div className="contendedor-lista-solicitud">
            <div className="contenedor-elemetos-listasolicitudes ">
                <div className='contendeor-titulo-listasolicitudes'>
                    <h2>Solicitudes Registradas: {data.length}</h2>
                    <div>

                    </div>
                </div>
                    <DataTable className='datatable' value={ListarSolicitudes.data}  
                        responsiveLayout="scroll" rowHover paginator rows={5} 
                        headerColumnGroup={headerGroup}    
                    >
                        <Column
                            field='id'
                            sortable
                        >
                        </Column>
                        <Column
                            field='numeroEstudiantesSolicitud'
                            sortable
                        >
                        </Column>
                        <Column
                            field='motivoSolicitud'
                            sortable
                        >
                        </Column>
                        <Column 
                            field='fechaSolicitud' 
                            sortable
                        >
                        </Column>
                        <Column
                            field='horaInicioSolicitud'
                            sortable
                        >
                        </Column>
                        <Column
                            //body={actionBodyTemplate}                      
                        >

                        </Column>
                    </DataTable>
                
            </div>
            {
                isOpen &&
                <ModalGenerico isOpen={ isOpen } closeModal={ closeModalEdicion } >
                    <FormularioReservaAula
                        titulo='Editar'
                        closeModal={ closeModalEdicion }
                        setListaSolicitud={ setListaSolicitud }    
                    />
                </ModalGenerico>
            }
        </div>
    )
}