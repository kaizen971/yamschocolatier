import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Nav(){
  const [authentification, setAuthentification] = useState(false);


  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch("http://localhost:8000/user",{
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
      })}, []);


return(<nav className='nav'>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
  <li>
    <Link to="/subscribe">Subscribe</Link>
  </li>
  <li>
    <Link to="/Yams">Yams</Link>
  </li>
  {authentification &&<li>
    <Link to="/Disconnect">Deconnexion</Link>
  </li>}
</ul>
</nav>
)
}

export default Nav;
