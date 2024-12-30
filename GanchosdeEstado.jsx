// Para agregar la funcionalidad de ocultar y mostrar el texto en el componente 
// de acordeón, debes utilizar el hook useState de React para manejar el estado 
// que controla si el contenido está visible o no. Aquí está el código completo 
// con el gancho de estado:

// Observa el siguiente gif de un componente simplificado de acordión usado en 
// la página principal de Academia X. El acordión se abre al presionar el botón 
// de + revelando texto y se cierra al presionar el botón -. Escribe el código 
// de gancho que hace falta en este componente para activar esta funcionalidad.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Acordion({ pregunta, texto }) {
	// Gancho para manejar el estado de si el texto está oculto o no
	const [oculto, setOculto] = useState(true);

	return (
		<div>
			<h5>{pregunta}</h5>
			{oculto ? (
				<button onClick={() => setOculto(false)}>+</button>
			) : (
				<button onClick={() => setOculto(true)}>-</button>
			)}
			{/* Mostrar el texto solo si no está oculto */}
			{oculto && <div>{texto}</div>}
		</div>
	);
}

ReactDOM.render(
	<Acordion
		pregunta="¿Tienen cursos gratuitos?"
		texto="Si deseas tutoriales y conocimientos gratuitos, Programador X los comparte todos los viernes en su canal de YouTube en programadorX.com"
	/>,
	document.querySelector('#root')
);

// useState(true): Se inicializa el estado oculto en true, lo que significa 
// que al cargar el componente, el texto estará oculto.

// setOculto(false) y setOculto(true): Estos manejadores de clic alternan 
// entre mostrar y ocultar el contenido.