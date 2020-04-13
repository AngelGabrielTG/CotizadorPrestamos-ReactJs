//DEBEMOS IMPORTAR EL FRAGMET PARA PODER UTILIZAR MAS PROPS
import React from 'react';

//CAMBIAMOS PROPS POR UNA SINTAXIS JS PARA QUE YA NO SEA NECESARIO ESCRIBIR .PROPS
/*
function Header({ titulo }) {
    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}
*/

//SIMPLIFICAR EL CODIGO EN ESTE CASO YA NO SE UTILIZARIA EL FRAGMENT
//CUANDO SE QUIERA REALIZAR OPERACIONES, LEER UNA VARIABLE UTILIZAR EL RETURN
const Header = ({ titulo }) => (  
        <h1>{ titulo }</h1>
    );


export default Header;