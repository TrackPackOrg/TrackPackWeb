import NavBar from './nav-bar/components/navbar';
import Login from './login/components/login';
import Register from './register/components/register';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Profile from './profile';
import VerifyEmail from './register/containers/verify_email';

function App() {
  return (
    <div className=''>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/verify-email'>
            <VerifyEmail />
          </Route>
          <Route path='/inicio-sesion'>
            <Login />
          </Route>
          <Route path='/registrarse'>
            <Register />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
