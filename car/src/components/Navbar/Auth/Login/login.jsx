import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");

    try {
      const res = await axios.post('http://car-rental-hello.vercel.app/api/auth/login', { email, password });


      // ✅ Save JWT token
      localStorage.setItem('token', res.data.token);

      // Optional: call callback to set user context
      if (onLoginSuccess) {
        onLoginSuccess(res.data.token);
      }

      // ✅ Redirect to home
      navigate('/home');
    } catch (err) {
      console.error(err);
      alert('Login failed');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault(); // ✅ Prevent form submission
    navigate('/register');
  };

  return (
    <div className="loginContainerrr">
      <form onSubmit={handleLogin} className="login-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />

      <button type="submit" className="button" id="Loginbtn">
        Login
      </button>

      <button onClick={handleRegister} className="button" id="Registerbtn">
        Register
      </button>
    </form>
    </div>
    
  );
};

export default Login;
