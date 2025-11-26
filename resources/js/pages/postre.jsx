import '../bootstrap';
//import '../css/app.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../components/sideBar';

function App() {
  let [contador, setContador] = useState(0);

  return (
    <div style={{width: "100%", height: "100vh", display: "flex", 
      flexDirection: "row"}}>
      <SideBar page={5}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);