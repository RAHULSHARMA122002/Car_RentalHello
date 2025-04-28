import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = form; // ✅ Extract from form state
      const res = await axios.post('http://car-rental-hello.vercel.app/api/auth/register',{
        name,
        email,
        password
      });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Error registering');
    }
  };

  return (
    <div className="Formmcontainer">
     <form onSubmit={handleSubmit} className='register-container'>
      <h2>Register To book fabulous cars!!</h2>
      <input
  type="text"
  name="name"
  placeholder="Name"
  value={form.name}
  onChange={handleChange}
  required
/>
<input
  type="email"
  name="email"
  placeholder="Email"
  value={form.email}
  onChange={handleChange}
  required
/>
<input
  type="password"
  name="password"
  placeholder="Password"
  value={form.password}
  onChange={handleChange}
  required
/>
      <button type="submit">Register</button>
    </form>
    </div>
    
  );
};

export default Register;
