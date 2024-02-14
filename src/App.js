import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/* Enviamos datos a los componentes */}
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      {/* React transforma todos lo que este dentro de nuestro componente en propiedad children*/}
      <TodoList>
        {defaultTodos.map(todo => (
      /* Cada iteración debe llevar un id unico para identificarlo.
          En este caso, mandamos a TodoItem un arreglo (con map) para que renderice cada elemento del arreglo.
          Cada propiedad será la misma que recebira en props el componente TodoItem
      */
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
        
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
