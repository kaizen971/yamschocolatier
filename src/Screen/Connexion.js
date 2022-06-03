import './App.css';
import React, { useState } from 'react';
import Nav from '../Component/nav';
import { Base_Url } from '../Constants/Constants';


function App2() {
  const handleSubmit = (event) => {
    var body = { email: email, password: password, status: "client" }
    
    fetch(`${Base_Url}/login`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(body)
    }).then(
      (response) => {
        console.log(response.status)
        if (response.status === 400) {
          setconnexion(false)
        }
        if (response.status === 200) {
          setconnexion(true)
         
        }
      })
  }




  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [connexion, setconnexion] = useState(null);

  return (
    <div className="App">
      <Nav />
      <header className="App-header">

      {connexion && <p style={{ color: "green" }}>Connexion Réussie</p>}
        {connexion === false && <p style={{ color: "red" }}>Connexion échouée</p>}  
        <div className='formLogin'>
       
          <p>Merci de saisir vos identifiants de connexion</p>
          <label>
            <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            <input type="password" placeholder='Mot de passe' required value={password} onChange={(e) => setpassword(e.target.value)} />
          </label>
          <button className="btnConnexion" onClick={() => handleSubmit()}>Connexion</button>
        </div>
      </header>
    </div>
  );
}

export default App2;
