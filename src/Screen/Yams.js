import './Yams.css';
 import Nav from '../Component/nav';
 import { useState } from 'react';



function Inscription() {
  const [tableau, settableau] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      console.log(dicetab)
      } 
       settableau(dicetab);
       setIsLoading(true);
  }

  return (
    <div className="App">
      <Nav/>
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      <header className="App-header">
        <p>Jeux Yams</p>
        {isLoading === true &&<div className='container'>
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
      </header>
  
    </div>

  );
}

export default Inscription;
