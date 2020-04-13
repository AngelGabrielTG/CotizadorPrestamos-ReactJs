//ARCHIVO PRINCIPAL AQUI VAN TODOS LOS COMPONENTES

//IMPORTAR UN FRAGMENT (ES COMO CREAR UN DIV)
import React, { Fragment, useState } from 'react';

//IMPORTAMOS HEADER, FROMULARIO, MENSAJE, RESULTADO, SPINNER
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {

  //DEFINIR EL STATE AL UTILIZAR RETORNA DOS VALORES
  //UTILIZANDO ARREYDISTROCTORI
  //EL PRIMERO VA SER UNA VARIABLE QUE VA CONTENER EL VALOR
  //EL SEGUNDO VA SER UNA FUNCION QUE VA SER UTILIZADA PARA GUARDAE EL STATE
  //USE STATE SE PUEDE DAR UN VALOR INICIAL STRING VACIO '' O EN NUEMEROS 0
  //CANTIDAD VA TENER EL VALOR QUE SE LE DA AL STATE
  //GUARDARCANTIDAD ES LA FUNCION PARA GUARDAR O MODIFICAR EL STATE
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  const [nombre, guardarNombre] = useState('');

  //CARGA CONDICIONAL DE COMPONENTES
  let componente;

  if(cargando) {
    componente = <Spinner />
  } else if(total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado 
                  nombre={nombre}
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
              />
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          nombre={nombre}
          guardarNombre={guardarNombre}
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
