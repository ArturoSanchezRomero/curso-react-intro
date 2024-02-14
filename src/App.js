// Importamos los componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {
  // Creamos la estructura de nuestra página
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      
      {/* <CreateTodoButton /> */}
    </div>
  );
}

export default App;

// Existe otra forma de exportar los componentes.
// export default function MyApp() {
//   return (
//     <div>
//       <h1>Bienvenido a mi aplicación</h1>
//       <MyButton />
//     </div>
//   );
// }