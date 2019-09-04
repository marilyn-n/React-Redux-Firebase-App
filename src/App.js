import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import './sass/main.scss';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={ Dashboard }/>
          <Route path="/project/:id" component={ ProjectDetails }/>
          <Route path="/signin" component={ SignIn }/>
          <Route path="/signup" component={ SignUp }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
