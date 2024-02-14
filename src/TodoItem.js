
// Enviamos los props para poder renderizarlos
function TodoItem(props) {
  return (
    <li>
      <span>V</span>
      {/* Mirá propiedad del prop text tiene el mismo nombre que enviamos en el componente Apps.js*/}
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };