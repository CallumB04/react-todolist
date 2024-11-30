import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import TodolistPage from './pages/Todolist/TodolistPage';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router basename="/react-todolist"> 
    { /* setting basename for deployment to portfolio */ }
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<TodolistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
