import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div className='row'>
          <div className='form-control col col-lg-6'>
            <label className=''>Nombre</label>
            <input type='text' placeholder='María' />
          </div>
          <div className='form-control col col-lg-6'>
            <label>Apellido</label>
            <input type='text' placeholder='López' />
          </div>
        </div>
        <div className='form-control'>
          <label>Correo electrónico</label>
          <input type='text' placeholder='ejemplo@dominio.com' />
        </div>
        <div className='form-control'>
          <label>Contraseña</label>
          <input type='password' placeholder='•••••••••••••' />
        </div>
        <div className='form-control'>
          <label>Confirma tu contraseña</label>
          <input type='password' placeholder='•••••••••••••' />
        </div>
        <div className='form-control col col-2'>
          <label>Teléfono</label>
          <div className='row'>
            <input
              type='text'
              value='504'
              className='align-right col   col-lg-2'
              disabled={true}
            ></input>
            <input
              type='tel'
              // pattern='[0-9]{4}-[0-9]{4}'
              placeholder='0000-0000'
              className='col-lg-3'
            ></input>
          </div>
        </div>
        <div className='form-control'>
          <div className='row'>
            <button type='submit' className='button button-primary col-lg-12'>
              Registrarmes
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
