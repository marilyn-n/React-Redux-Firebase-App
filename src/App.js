import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/layout/Nav';
import './sass/main.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
