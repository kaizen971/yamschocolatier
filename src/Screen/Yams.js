import './Yams.css';
import Nav from '../Component/nav.js';
import React, { useState, useEffect } from 'react';
import { Base_Url } from '../Constants/Constants';
import axios from 'axios'
import { Link } from "react-router-dom";

function Yams() {
  const [tableau, settableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authentification, setAuthentification] = useState(false);
  const [resultat, setresultat] = useState({ text: null, id_victory: null });

  const SendResult = () => {
    fetch(`${Base_Url}/Reward`, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response)=>{

      console.log(response);

    })

  }

  useEffect(() => {
    if (resultat.id_victory) {
      console.log(resultat.id_victory);
      SendResult(resultat.id_victory);
    }
  }, [resultat]);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(`${Base_Url}/user`, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      (response) => {
        if (response.status === 400) {

          setAuthentification(false)
        }
        if (response.status === 200) {

          setAuthentification(true)
        }
      })
  });

  return (
    <div className="App">
      <Nav />
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      {!authentification && <header className="App-header"><p className='authenError' style={{ color: "red" }}>Vous devez vous authentifier pour jouer au Yams</p>
        <div className='login_subscribe'>
          <Link to="/login">Identifiez vous</Link> ou <Link to="/subscribe">Inscrivez vous</Link>
        </div>
      </header>}



      {authentification && <header className="App-header">
        <p>Jeux Yams</p>
        {resultat.text != null && resultat.text !== false && <p style={{color:'green'}}>{`Bien joué !! Vous gagnez en faisant ${resultat.text}`}</p>}
        {resultat.text === false && <p style={{color:'red'}}>{`Vous avez perdu`}</p>}
        {isLoading === true && <div className='container'>
          <div className='dé'>
            <img src={require(`../Assets/${tableau[0]}.png`)} alt="dé_1" className='imageDice'/>
          </div>
          <div className='dé'>
            <img src={require(`../Assets/${tableau[1]}.png`)} alt="dé_2" className='imageDice'/>
          </div>
          <div className='dé'>
            <img src={require(`../Assets/${tableau[2]}.png`)} alt="dé_3" className='imageDice'/>
          </div>
          <div className='dé'>
            <img src={require(`../Assets/${tableau[3]}.png`)} alt="dé_4" className='imageDice'/>
          </div>
          <div className='dé'>
            <img src={require(`../Assets/${tableau[4]}.png`)} alt="dé_5" className='imageDice'/>
          </div>
        </div>}
        <button onClick={SendResult}>Lancer le jeu Yams</button>
      </header>}

    </div>

  );
}

export default Yams;
