import './App.css';
import { useState } from 'react';
import Nav from './nav';
import {Redirect} from 'react-router-dom';

function App2() {
  const handleSubmit = (event) => {
    var body = { email: email , password:password }
 

      fetch("https://56ff-78-116-252-179.eu.ngrok.io/login",{
        method: 'post',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(body)
      }).then(
        (response) => {
          console.log(response.status)
          if(response.status === 400){
            setconnexion(false)
          }
          if(response.status === 200){
            setconnexion(true)
           return <Redirect to="/Yams" />
          }
        })
 }
 
 const [email, setEmail] = useState("");
 const [password, setpassword] = useState("");
 const [connexion, setconnexion] = useState(false);


 
  return (
    <div className="App">
       <Nav/>
      <header className="App-header">
      {connexion && <p style={{color:"green"}}>Connexion Réussie</p>} 
      {!connexion && <p style={{color:"red"}}>Connexion Failed</p>} 

      <form >
  <label>
    email:
    <input type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          />
  </label>
  <label>
    password:
    <input type="password" 
          value={password}
          onChange={(e) => setpassword(e.target.value)} />
  </label>
</form>
<button onClick={() => handleSubmit()}>Connexion</button>
      </header>
    </div>
  );
}

export default App2;
