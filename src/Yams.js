import './Yams.css';
 import Nav from './nav';



function Random(){
  var RandomNumber = Math.floor(Math.random() * 6) + 1 ;
  return (RandomNumber);
}


function Inscription() {
  return (
    <div className="App">
      <Nav/>
      {/* {subscribeconfirm && <p>Inscription Réussie</p>} */}
      <header className="App-header">
        <p>Jeux Yams</p>
        <div className='container'>
          <div className='dé'>
              <img src={require(`./Assets/${Random()}.png`)}  />
              {/* <p className='chiffre'>{Random()}</p> */}
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${Random()}.png`)} />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${Random()}.png`)} />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${Random()}.png`)} />
          </div>
          <div className='dé'>
          <img src={require(`./Assets/${Random()}.png`)} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Inscription;
