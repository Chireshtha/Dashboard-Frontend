import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'



const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  // Update React login component
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values))

    if (errors.email === "" && errors.password === "") {
      axios.post('http://127.0.0.1:5000/login', values, {
        headers: {
          'Content-Type': 'application/json' // Set the Content-Type header to JSON
        }
      })
        .then(res => {
          if (res.data.message === 'Login successful') {

            console.log("loggedin Successfully", res.data);
            navigate('/board_details');
          } else {
            alert('Invalid email or password');
          }
        })
        .catch(err => {
          console.error('Login Error:', err);
          alert('An error occurred during login. Please try again later.');
        });
    }
  };


  return (
    <div className='container'>
      <div className='login'>
        <form id='form' method='POST' onSubmit={handleSubmit}>
          <h4><span>CTV </span> &nbsp; SmartHub &nbsp;<sup> Cell </sup> <sub>Digital Platform Conductor</sub></h4>
          <label>Username</label>
          <input type='text' name='email' onChange={handleInput} autoComplete="email" />
          {errors.email && <span className='text-danger'>{errors.email} </span>}
          <label>Password</label>
          <input type='password' name='password' onChange={handleInput} autoComplete="current-password"/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
          <button type='submit'>Login</button> 
          <p className='p1'>Forgot Password?</p>
          <p><Link to='/Signup' className='p2'>Don't have an account?</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
