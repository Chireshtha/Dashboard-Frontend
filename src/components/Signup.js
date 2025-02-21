import React, { useState } from 'react'
import '../styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from './SignupValidation'


const Signup = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post('http://127.0.0.1:5000/signup', values, {
        headers: {
          'Content-Type': 'application/json' // Set the Content-Type header to JSON
        }
      })  // Update the URL with your Flask server's address
        .then((res) => {
          console.log("Registered Successfully", res.data);
          navigate('/login');
        })
        .catch((err) =>
          console.error("Error during registration:", err));
    }
  };

  return (
    <div className='container'>
      <div className='signup'>
        <form id='form' method='post' onSubmit={handleSubmit}>
          <h4><span>CTV </span> &nbsp; SmartHub &nbsp;<sup> Cell </sup> <sub>Digital Platform Conductor</sub></h4>
          <label>Name</label>
          <input type='text' name='name' onChange={handleInput} autoComplete="name"/>
          {errors.name && <span className='text-danger'>{errors.name}</span>}
          <label>Username</label>
          <input type='text' name='email' onChange={handleInput} autoComplete="email"/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
          <label>Password</label>
          <input type='password' name='password' onChange={handleInput} autoComplete="current-password"/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
          <button type='submit'>Signup</button>
          <p><Link to='/Login' className='p2'>Already have an account?</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
