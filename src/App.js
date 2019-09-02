import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import sass from './sass/main.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
