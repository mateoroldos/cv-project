import React from 'react';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import './styles/app.styles.css'

function App() {
  return (
    <div className = 'main-grid' >
      <Sidebar/>
      <Body/>
    </div>
  );
}

export default App;
