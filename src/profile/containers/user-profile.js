import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className=''>
        <div className='card'>
          <div align='center'>
            <img
              src='http://sites.nicholas.duke.edu/clarklab/files/2011/01/default_profile-d80441a6f25a9a0aac354978c65c8fa9.jpg'
              width='100'
              height='100'
              className='Aline-center'
            />
          </div>

          <div className='profile-control'>
            <label>Nombre</label>
            <div className='row'>
              <input
                type='text'
                value='Maria'
                className='align-center '
                disabled={true}
              />
            </div>
          </div>

          <div className='profile-control col'>
            <label>Apellido</label>
            <div className='row'>
              <input
                type='text'
                value='Lopez'
                className='align-center col'
                disabled={true}
              />
            </div>
          </div>

          <div className='profile-control col'>
            <label>Correo</label>
            <div className='row'>
              <input
                type='text'
                value='Maria_lopez@email'
                className='align-center col'
                disabled={true}
              />
            </div>
          </div>

          <div className='form-control col'>
            <label>Telefono</label>
            <div className='row'>
              <input
                type='text'
                value='0000-0000'
                className='align-center col'
                disabled={true}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default UserProfile;
