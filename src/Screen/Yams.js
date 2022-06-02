import './Yams.css';
 import Nav from '../Component/nav.js';
 import React, { useState, useEffect } from 'react';
import { Base_Url } from '../Constants/Constants';



function Yams() {
  const [tableau, settableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authentification, setAuthentification] = useState(false);
  const [resultat, setresultat] = useState({text:null,id_victory:null});

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
       result(dicetab);
       setIsLoading(true);
  }
  function result(dicetab){
    let compteur = [0,0,0,0,0,0];
    var id_victory = null
    for(let i = 0 ; i < dicetab.length ; i++){
      switch(dicetab[i]){
        case 1 :
          compteur[0] = compteur[0] + 1 ;
          break;
        case 2 :
          compteur[1]++;
          break;
        case 3 :
          compteur[2]++;
          break;
        case 4 :
          compteur[3]++;
          break;
        case 5 :
          compteur[4]++;

          break;
        case 6:
          compteur[5]++;
          break;
        default:
          break;
      }
   
    }

    if(compteur.includes(2)){
        id_victory = 1
        setresultat({text:"une Paire",id_victory:1})
        
    }
    else if(compteur.includes(3)){
        id_victory = 2
        setresultat({text:"un Full",id_victory:2})
        
    }
    else if(compteur.includes(4)){
        id_victory = 3
        setresultat({text:"un Carré",id_victory:3})
      
    }
    else if(compteur.includes(5)){
        id_victory = 4
        setresultat({text:"un Yams",id_victory:4})
        
    }
    else{
        id_victory = 0
        setresultat({text:false,id_victory:0})
        
    }
    
  
  }

  const SendResult = (result) => {
    var body = {id_victory: result};
    fetch(`${Base_Url}/Reward`,{
      method: 'post',
      mode:'cors',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(body)
    })
  }

  useEffect(() => {
    if(resultat.id_victory){
    console.log("update résultat")
     SendResult(resultat);
    }
  }, [resultat]); 

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch(`${Base_Url}/user`,{
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
      })
  });

  return (
    <div className="App">
      <Nav/>
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      {!authentification && <header className="App-header"><p className='authenError' style={{color:"red"}}>Vous devez vous authentifier</p></header>}
      {authentification &&<header className="App-header">


        <h1>Choco-Yams</h1>

        {resultat.text != null && resultat.text !== false && <p style={{color:'green'}}>{`Bien joué !! Vous gagnez en faisant ${resultat.text}`}</p>}
        {resultat.text === false && <p style={{color:'red'}}>{`Vous avez perdu`}</p>}

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
        <button onClick={() => shuffleDice()}>Lancer le jeu Yams</button>
      </header>}
  
    </div>

  );
}

export default Yams;
