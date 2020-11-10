import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div className='form-control'>
          <label>Correo eletrónico</label>
          <input type='text' placeholder='ejemplo@dominio.com' />
        </div>
        <div className='form-control'>
          <label>Contraseña</label>
          <input type='password' placeholder='•••••••••••••' />
        </div>
        <div className='form-control'>
          <div className='row'>
            <button type='submit' className='button button-primary col-lg-12'>
              Iniciar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
