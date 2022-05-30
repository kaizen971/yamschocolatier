import './App.css';
import { useState } from 'react';
 import Nav from './nav';

function Inscription() {
    const handleSubmit = () => {
    var body = { firstName : firstName ,lastName:lastName, email: email , password:password , passwordConfirm: passwordConfirm}
    console.log(body)
      fetch("http://localhost:8000/subscribe",{
        method: 'post',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(body)
      }).then(
        setsubscribeconfirm(true)
      )
 }
 const [firstName, setfirstName] = useState("");
 const [lastName, setlastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setpassword] = useState("");
 const [passwordConfirm, setpasswordConfirm] = useState("");
 const [subscribeconfirm, setsubscribeconfirm] = useState(false);

 
  return (
    <div className="App">
      <Nav/>
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      <header className="App-header">
      <form onSubmit={handleSubmit}>
  <label>
    firstName:
    <input type="text" 
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          
          />
  </label>
  <label>
    lastName:
    <input type="text" 
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          
          />
  </label>
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
  <label>
    passwordConfirm:
    <input type="password" 
          value={passwordConfirm}
          onChange={(e) => setpasswordConfirm(e.target.value)} />
  </label>
  <button onClick={Inscription} value="Submit" >
    Envoyer
    </button>
</form>


      </header>
    </div>
  );
}

export default Inscription;
