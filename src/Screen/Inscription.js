import './App.css';
import { useState } from 'react';
import Nav from '../Component/nav';
import { Base_Url } from '../Constants/Constants';


function Inscription() {
  const handleSubmit = () => {
    var body = { firstName: firstName, lastName: lastName, email: email, password: password, passwordConfirm: passwordConfirm }
    fetch(`${Base_Url}/subscribe`, {
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
          console.log(response);
          setsubscribeconfirm(false)
        
        }
        if (response.status === 200) {
          
            console.log(response);
          setsubscribeconfirm(true)
      
        }
      })
  }

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [subscribeconfirm, setsubscribeconfirm] = useState(null);


  return (
    <div className="App">
      <Nav />
      {subscribeconfirm && <p style={{color:"green"}}>Inscription réussie</p>}
      {subscribeconfirm === false && <p style={{color:"red"}}>Inscription échouée</p>}
      <header className="App-header">
      <div className='formInscription' >
          <p>Formulaire d'inscription</p>
          <label>
            <input type="text" placeholder='Nom' required value={firstName} onChange={(e) => setfirstName(e.target.value)} />
          </label>
          <label>
            <input type="text" placeholder='Prénom' required value={lastName} onChange={(e) => setlastName(e.target.value)} />
          </label>
          <label>
            <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <input type="password" placeholder='Mot de passe' required value={password} onChange={(e) => setpassword(e.target.value)} />
          </label>
          <label>
            <input type="password" placeholder='Veuillez ressaisir votre mot de passe' required value={passwordConfirm} onChange={(e) => setpasswordConfirm(e.target.value)} />
          </label>
          <button className='confirmInscription' onClick={() => handleSubmit()} value="Submit" >
            Envoyer
          </button>
        </div>


      </header>
    </div>
  );
}

export default Inscription;
