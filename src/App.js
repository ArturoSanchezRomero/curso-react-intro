// Importar los elementos necesarios para utilizar en el componente
import logo from './platzi.webp';
import './App.css';

// Componente principal. Los componentes van en mayusculas. 
function App() {
  // Los componentes retornar elementos JSX.
  // Utiliza JSX (parecido a html) para mostrar los componentes.

  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

// Creamos un componente
// Los componentes de llaman entre <>
// Ejemplo: <TodoItem />

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
