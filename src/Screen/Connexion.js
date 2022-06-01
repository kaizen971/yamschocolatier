import './App.css';
import { useState } from 'react';
import Nav from '../Component/nav';

function App2() {
  const handleSubmit = (event) => {
    var body = { email: email , password:password, status:"client" }
    

      fetch("http://localhost:8000/login",{
        method: 'post',
        mode:'cors',
        credentials:'include',
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
          }
        })
 }
 
 const [email, setEmail] = useState("");
 const [password, setpassword] = useState("");
 const [connexion, setconnexion] = useState(null);
  return (
    <div className="App">
       <Nav/>
      <header className="App-header">
      {connexion && <p style={{color:"green"}}>Connexion Réussie</p>} 
      {connexion === false && <p style={{color:"red"}}>Connexion Failed</p>} 

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
