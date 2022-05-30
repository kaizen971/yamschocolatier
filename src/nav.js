import {  Link } from "react-router-dom";

function nav(){
return(<nav className='nav'>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
  <li>
    <Link to="/subscribe">Subscribe</Link>
  </li>
</ul>
</nav>
)
}

export default nav;
