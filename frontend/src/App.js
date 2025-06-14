import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Registro</Link></li>
            <li><Link to="/users">Lista de Usuarios</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;