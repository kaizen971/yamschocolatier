import './App.css';
import { useState } from 'react';
import Nav from './nav';
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
      })
 }
 
 const [email, setEmail] = useState("");
 const [password, setpassword] = useState("");
 const [connexion, setconnexion] = useState(false);


 
  return (
    <div className="App">
       <Nav/>
      <header className="App-header">
      <form onSubmit={handleSubmit}>
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
  <input type="submit" />
</form>
      </header>
    </div>
  );
}

export default App2;
