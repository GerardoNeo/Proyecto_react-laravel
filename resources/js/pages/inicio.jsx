import '../bootstrap';
//import '../css/app.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../components/sideBar';
import InicioContent from '../components/inicioContent';
import Notificaciones from '../components/notificaciones';

function App() {
  let [click, setClick] = useState(false);

  return (
    <div style={{width: "100%", height: "100vh", display: "flex", 
      flexDirection: "row"}}>
      <SideBar page={1} click={click} setClick={setClick}/>
      <InicioContent/>
      <Notificaciones flag={click}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);