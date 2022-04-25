import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPages';
import React, {useState} from 'react';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={< LoginPage/>} />
          <Route path='/nav' element={< Navigation/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
