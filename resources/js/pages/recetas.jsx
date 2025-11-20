import '../bootstrap';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../components/sideBar';
import Content from '../components/content';


function App() {
  let [contador, setContador] = useState(0);

  return (
    <div style={{width: "100%", height: "100vh", display: "flex", 
      flexDirection: "row"}}>
      <SideBar/>
      <Content/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);