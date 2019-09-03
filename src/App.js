import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import './sass/main.scss';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/" component={ Dashboard }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
