import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Screen/Home';
import Login from './Screen/Connexion';
import Inscription from './Screen/Inscription';
import Yams from './Screen/Yams'
import Deconnexion from './Screen/Deconnexion';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Screen/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/subscribe" element={<Inscription/>} />
    <Route path="/Yams" element={<Yams/>} />
    <Route path="/Disconnect" element={<Deconnexion/>} />
    <Route path="/Dashboard" element={<Dashboard/>} />

  </Routes>
</BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
