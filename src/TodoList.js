// Children es todo lo que se encuentra dentro del componente, en este caso, children tiene otros componentes

function TodoList({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}

export { TodoList };

