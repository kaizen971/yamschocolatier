import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Base_Url } from "../Constants/Constants";
function Nav(){
  const [authentification, setAuthentification] = useState(false);


  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(`${Base_Url}/user`,{
      method: 'get',
      mode:'cors',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      }, 
    }).then(
      (response) => {
        if(response.status === 400){
          setAuthentification(false)
        }
        if(response.status === 200){
          setAuthentification(true)
        }
      })},[]);


return(<nav className='nav'>
<ul>
  <li>
    <Link to="/">Accueil</Link>
  </li>
  {!authentification &&<li>
    <Link to="/login">Connexion</Link>
  </li>}
  {!authentification &&<li>
    <Link to="/subscribe">Inscription</Link>
  </li>}
  <li>
    <Link to="/Yams">Yams</Link>
  </li>
  {authentification &&<li>
    <Link to="/Disconnect">Déconnexion</Link>
  </li>}
  {authentification &&<li>
    <Link to="/Dashboard">Dashboard</Link>
  </li>}
</ul>
</nav>
)
}

export default Nav;
