import './Yams.css';
import Nav from '../Component/nav.js';
import React, { useState, useEffect } from 'react';
import { Base_Url } from '../Constants/Constants';
import { Link } from "react-router-dom";

function Yams() {
  const [tableau,setableau] = useState([]);
  const [isLoading,setisLoading] = useState(false);
  const [authentification, setAuthentification] = useState(false);
  const [resultat,setresultat] = useState({ text: null, id_victory: null });

  const SendResult = () => {
    fetch(`${Base_Url}/game`, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((result)=>result.json())
    .then(
      (data) =>{
        setableau(data.tableau);
        setresultat(data.result);
        setisLoading(true)
      }
    )
  }



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
        <h1 className='jeu'>Jeu Yams</h1>

        {isLoading === false &&<a className='dice' href="https://www.gifsanimes.com/cat-des-710.htm"><img class="imgDice" src="https://www.gifsanimes.com/data/media/710/de-image-animee-0020.gif" border="0" alt="gif dé" /></a>}

        
        {resultat?.text != null && resultat?.text !== false && <p style={{color:'green'}}>{`Bien joué !! Vous gagnez en faisant ${resultat.text}`}</p>} 
       {resultat?.text === false && <p style={{color:'red'}}>{`Vous avez perdu`}</p>} 
       { resultat?.id_victory > 0 && <p style={{color:'black'}}>{`Vous avez gagné ${resultat?.id_victory} récompense(s) !! Pensez à regarder votre profil`}</p>} 
       
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
        <button className='btnYams' onClick={SendResult}>Lancer le jeu Yams</button>
      </header>}

    </div>

  );
}

export default Yams;
