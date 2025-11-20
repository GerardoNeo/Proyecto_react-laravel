import '../bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../components/sideBar';

function App() {
  let [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px"}}>
      <SideBar/>

      <h1>Contador React</h1>

      <h2>{contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Sumar
      </button>

      <button onClick={() => setContador(contador * contador)} style={{ marginLeft: "10px" }}>
        Elevar al cuadrado
      </button>

      <button onClick={() => setContador(contador = Math.sqrt(contador))} style={{ marginLeft: "10px" }}>
        Sacar raiz
      </button>

      <button onClick={() => setContador(contador = 0)} style={{ marginLeft: "10px" }}>
        Poner en 0
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);