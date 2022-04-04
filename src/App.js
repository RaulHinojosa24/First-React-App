// Importar el fichero logo.svg y lo guarda en la variable 'logo' 
import logo from './logo.svg';

// Aplicar los estilos CSS contenidos en el fichero App.css
import './App.css';
import { useState } from 'react';
import Button from './Button.js';

function App() {

  function clickedButton() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // setBgColor es una función asincrona, el estado se modifica cuando React decida que es el mejor momento de hacerlo 
    setBgColor(`rgb(${red}, ${green}, ${blue})`);
  }

  // Para definir el estado con hook utilizamos useState
  // En el parámetro de useState le puedes poner cualquier tipo de valor (string, number, objeto, array)
  const [bgColor, setBgColor] = useState('yellow');

  return (
    // class => className. Aplicamos la clase .App a este div

    // JSX puede tener hijos como el HTML 'normal'
    // img src={logo} . Establece el atributo 'src' con el valor de la variable 'logo'

    // REgla de oro de todos los componentes JSX: Tienen que tener un contenedor 'padre' (tipo <div>) 

    <div className="App" >
      <header className="App-header" style={{ 'backgroundColor': bgColor }}>
        <Button changeColor={clickedButton} texto="Haz click en mi!" />
      </header>
    </div>
  );
}

export default App;