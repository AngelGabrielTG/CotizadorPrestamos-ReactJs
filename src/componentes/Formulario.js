//IMR
//TODO LO QUE SEA INTERACTIVO USA EL USESTATE
import React, { Fragment, useState} from 'react';
import { calcularTotal } from '../helpers';

//SFC
const Formulario = (props) => {

    const {nombre, guardarNombre, cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;

    //DEFINIR STATE
    const [error, guardarError] = useState(false);

    //CUANDO EL USUARIO HAGA SUBMIT
    const calcularPrestamo = e => {
        e.preventDefault();
        
        //VALIDAR
        if( nombre === '' || cantidad === 0 || plazo === ''){
            guardarError(true);
            return;
        } 

        //ELIMINAR EL ERROR PREVIO
        guardarError(false);

        //HABILITAR EL SPINNER
        guardarCargando(true);

        setTimeout( () => {
            //REALIZAR LA COTIZACION
            const total = calcularTotal(cantidad, plazo);

            //UNA VEZ CALCULADO, GUARDAR TOTAL
            guardarTotal(total);

            //DESHABILITAR EL SPINNER
            guardarCargando(false);
        }, 3000);
    }

    return (  
        <Fragment>
            <form onSubmit={ calcularPrestamo }>
                <div className="row">
                    <div>
                        <label>Nombre Completo</label>
                        <input 
                            className="u-full-width" 
                            type="text" 
                            placeholder="Introducir Nombre Completo" 
                            onChange={ e => guardarNombre(e.target.value) }
                        />
                    </div>
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange={ e => guardarCantidad(parseInt(e.target.value)) }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => guardarPlazo(parseInt(e.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            { (error) ? <p className="error">Todos los campos son obligatorios</p> : null }
        </Fragment>
    );
}
 
export default Formulario;