import './App.css';
import React, { useState, useEffect } from 'react';
 import Nav from '../Component/nav';
import { Base_Url } from '../Constants/Constants';
function Dashboard() {

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(`${Base_Url}/Dashboard`,{
      method: 'get',
      mode:'cors',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      }, 
    })})
 
  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

export default Dashboard;
