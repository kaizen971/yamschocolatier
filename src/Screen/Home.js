import logo from '../Assets/chocolat_yams.png';
import './App.css';
import { Link } from "react-router-dom";
import Nav from '../Component/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Bienvenue à la <span style={{color:"#47150C"}}>Brioche écarlate !</span></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vous souhaitez gagner une ou plusieurs patisseries simplement en jouant ?</p>
        <div className='login_subscribe'>
          <Link to="/login">Identifiez vous</Link> ou <Link to="/subscribe">Inscrivez vous</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
