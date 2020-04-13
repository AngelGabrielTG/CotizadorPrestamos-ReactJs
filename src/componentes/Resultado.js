import React from 'react';

const Resultado = ({ nombre, total, plazo, cantidad }) => (  
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>Datos del usuario: {(nombre)}</p>
            <p>La cantidad solicitada es: ${(cantidad).toFixed(2)}</p>
            <p>El plazo solicitado es: {plazo} Meses</p>
            <p>Su pago mensual es de: ${(total/plazo).toFixed(2)}</p>
            <p>El total a pagar es: ${(total).toFixed(2)} </p>
        </div>
    );

 
export default Resultado;