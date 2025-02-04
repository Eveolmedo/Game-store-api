import React, { useState } from 'react';
const API_URL = "https://game-store-api-9zl9.onrender.com"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para mostrar mensajes

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }
      
      setMessage('✅ Registro exitoso. Ahora puedes iniciar sesión.');
    } catch (error) {
      setMessage('❌ Error al registrar usuario.');
      console.error(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);
      
      setMessage('✅ Inicio de sesión exitoso. Bienvenido!'); // Mensaje de éxito
    } catch (error) {
      setMessage('❌ Error al iniciar sesión. Verifica tus credenciales.');
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Iniciar Sesión
        </button>
      </form>
      <button
        onClick={handleRegister}
        className="w-full bg-green-600 text-white p-2 rounded mt-4 hover:bg-green-700"
      >
        Registrarse
      </button>

      {/* Mensaje de éxito o error */}
      {message && (
        <p className="text-center mt-4 font-medium text-gray-800">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoginForm;