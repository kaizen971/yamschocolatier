import logo from '../Assets/chocolat_yams.png';
import './App.css';
import {  Link } from "react-router-dom";
import Nav from '../Component/nav';

function App() {
  return (
    <div className="App">
        <Nav/>
      <header className="App-header">
      

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Chocolat_Yams
        </p>
        <Link to="/login">Login</Link>

      </header>
    </div>
  );
}

export default App;
