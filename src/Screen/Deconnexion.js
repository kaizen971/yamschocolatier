import './App.css';
import React, { useState, useEffect } from 'react';
 import Nav from '../Component/nav';
 import { Base_Url } from '../Constants/Constants';

function Deconnexion() {

  const [authentification, setAuthentification] = useState(false);


  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(`${Base_Url}/logout`,{
      method: 'get',
      mode:'cors',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      }, 
    }).then(
      (response) => {
        console.log(response.status)
        if(response.status === 400){
          setAuthentification(false)
        }
        if(response.status === 200){
          setAuthentification(true)
        }
      })});
 
  return (
    <div className="App">
      <Nav/>
      {authentification && <p>Vous avez été déconnecté</p>}
      {!authentification && <p>Un problème est survenue</p>}
    </div>
  );
}

export default Deconnexion;
