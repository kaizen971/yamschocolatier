import './Yams.css';
 import Nav from './nav';
 import { useState } from 'react';



function Random(){
  var RandomNumber = Math.floor(Math.random() * 6) + 1 ;
  return (RandomNumber);
}


function Inscription() {
  const [tableau, settableau] = useState(null);

  return (
    <div className="App">
      <Nav/>
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      <header className="App-header">
        <p>Jeux Yams</p>
        {tableau != null &&<div className='container'>
          <div className='dé'>
              <img src={require(`./Assets/${tableau[0]}.png`)}  alt="dé_1" />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${tableau[1]}.png`)} alt="dé_2" />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${tableau[2]}.png`)} alt="dé_3" />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${tableau[3]}.png`)} alt="dé_4"  />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${tableau[4]}.png`)} alt="dé_5"  />
          </div>
        </div>}
      </header>
    </div>

  );
}

export default Inscription;
