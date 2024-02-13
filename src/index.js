import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Importamos el componente principal de nuestra aplicación
import App from './App';

// Seleccionamos el id del div en el index.html para saber donde renderizar nuestra aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));
// Metodo que nos permite renderizar nuestra aplicación
root.render(<App />);