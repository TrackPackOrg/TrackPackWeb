import { Browserrouter as Router, Switch, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className='nav-container'>
        <ul className='nav-links'>
          <li>
            <a href='#'>Inicio Sesión</a>
          </li>
          <li>
            <a href='#'>Registro</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
