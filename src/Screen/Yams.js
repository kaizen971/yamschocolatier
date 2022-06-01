import './Yams.css';
 import Nav from '../Component/nav.js';
 import React, { useState, useEffect } from 'react';



function Inscription() {
  const [tableau, settableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authentification, setAuthentification] = useState(false);

  const DiceLength = 5;
  function shuffleDice(){
      setIsLoading(false);
      let dicetab = tableau;
      if(dicetab.length === 5){
        dicetab = [];
      }
      for (let i = 0; i < DiceLength ; i++) {
      var RandomNumber = Math.floor(Math.random() * 6) + 1 ;
      dicetab.push(RandomNumber)
      } 
       settableau(dicetab);
       setIsLoading(true);
  }

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
        console.log(response.status)
        if(response.status === 400){
          console.log("no")
          setAuthentification(false)
        }
        if(response.status === 200){
          console.log("yes")
          setAuthentification(true)
        }
      })



  });

  return (
    <div className="App">
      <Nav/>
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      {!authentification && <header className="App-header"><p className='authenError' style={{color:"red"}}>Vous devez vous authentifier</p></header>}

      {authentification &&<header className="App-header">
        <p>Jeux Yams</p>
        {isLoading === true && <div className='container'>
          <div className='dé'>
              <img src={require(`../Assets/${tableau[0]}.png`)}  alt="dé_1" />
          </div>
          <div className='dé'>
          <img src={require(`../Assets/${tableau[1]}.png`)} alt="dé_2" />
          </div>
          <div className='dé'>
          <img src={require(`../Assets/${tableau[2]}.png`)} alt="dé_3" />
          </div>
          <div className='dé'>
          <img src={require(`../Assets/${tableau[3]}.png`)} alt="dé_4"  />
          </div>
          <div className='dé'>
          <img src={require(`../Assets/${tableau[4]}.png`)} alt="dé_5"  />
          </div>
        </div>}
        <button onClick={shuffleDice}>Lancer le jeu Yams</button>
      </header>}
  
    </div>

  );
}

export default Inscription;
