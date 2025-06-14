import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Mini App de Registro de Usuarios</h1>
        <Switch>
          <Route exact path="/" component={RegisterForm} />
          <Route path="/users" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;