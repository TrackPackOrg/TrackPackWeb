import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AddressBox from './components/address';
import UserProfile from './containers/user-profile';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsAuthenticated: localStorage.getItem('isUserAuthenticated'),
    };
  }

  render() {
    return this.state.userIsAuthenticated ? (
      <div className='row'>
        <div className='col col-lg-4'>
          <UserProfile />
        </div>
        <div className='col col-lg-8'>
          <AddressBox />
        </div>
      </div>
    ) : (
      <Redirect to='/inicio-sesion' />
    );
  }
}

export default Profile;
