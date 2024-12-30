// Twitter es una de las redes sociales más populares en el mundo y esta utiliza 
// hooks de efecto de React. Observa el componente de la siguiente imagen.

// Crea el componente funcional Categoria en el que empieces inicializando el estado 
// de categoria con un arreglo vacío utilizando React.useState. Posteriomente utiliza 
// el gancho de efecto para que la primera vez que se cargue el componente se llame 
// a la función asincrona fetchCategorias la cual realiza una promesa a 
// 'https://categorías.com/categoria' y guarda su contenido en la constante respuesta, 
// después en la constante datos guarda tu respuesta en formato json, actualiza 
// a setCategoria con los datos y llama a la función fetchCategorias. Posteriormente 
// retorna la lista no ordenada de categoria y recorrela recibiendo a cat e imprime 
// cat.title en cada item, asimismo utiliza cat.id como key de tu li. 
// Renderiza el componente en el elemento cuyo id sea 'root'.

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Categoria() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    async function fetchCategorias () {
        const respuesta = await fetch('https://categorías.com/categoria');
        const datos = await respuesta.json();
        setCategoria(datos);
      }

    fetchCategorias();
  }, []);

  return (
    <ul>
      {categoria.map(cat => (
        <li key={cat.id}>{cat.title}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<Categoria />, document.getElementById('root'));