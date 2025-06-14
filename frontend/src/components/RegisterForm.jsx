import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({ full_name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error al registrar usuario');
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="full_name" placeholder="Nombre completo" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterForm;