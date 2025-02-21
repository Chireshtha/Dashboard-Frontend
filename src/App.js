import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import BoardDetails from './components/BoardDetails';



function App() {
  
  return (
    <BrowserRouter>
    <Dashboard />

    <Routes>
      <Route path='/Login' element = {<Login/>} />
      <Route path='/Signup' element = {<Signup />} />
      <Route path='/board_details' element = {<BoardDetails />} />
    </Routes>
      </BrowserRouter>
  );
}

export default App;
