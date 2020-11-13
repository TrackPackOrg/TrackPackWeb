import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <ul className='nav-links'>
          <li>
            <a>
              <Link to='/'>Home</Link>
            </a>
          </li>
          <li>
            <a href='inicio-sesion'>
              <Link to='/inicio-sesion'>Iniciar Sesión</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to='/registrarse'>Registro</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to='/profile'>Perfil</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
