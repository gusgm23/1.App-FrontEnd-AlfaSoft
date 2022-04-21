import './estilos_spinner.css'

function Spinner(){
    return(
        <div className="contenedor-spinner">
            <div className="spinner elemento-spinner">
            </div>
            <div className="contenedor-cargando elemento-spinner">
                <label className="label-cargando">Cargando...</label>
            </div>
        </div>
    )
}

export default Spinner;