
function TodoCounter({ total, completed }) {
/*Hay varias formas de recibir las props, otra forma hubiera sido:

  props.total;
  props.completed; */

  // Pasamos los props a los elementos para que se muestren en el HTML
  // La forma de insertar JS dentro de JSX, es mediante {}
  return (
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
