/**
 * 
 * Un componente React creado en una función (functional component). 
 * Cuando hagamos click en el botón, queremos cambiar el color de fondo de toda la APP
 */

// Los componentes empiezan por maýusculas y usan notación Pascal Case. 
// Button, FormLogin, Header, HeaderSearchBar
const Button = ({ changeColor, texto }) => {

    // button si dispone del evento onClick 

    return (<button onClick={changeColor}
        style={{ 'fontSize': '20px' }} className='Btn'> {texto}
    </button>);
}

export default Button;