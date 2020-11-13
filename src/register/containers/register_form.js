import axios from 'axios';
import React, { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordVerif: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      nombre: this.state.name,
      apellido: this.state.lastname,
      correo: this.state.email,
      passwd: this.state.password,
      telefono: this.state.phone,
    };

    axios.post('http://localhost:3300/customer', user).catch((err) => {
      return err.message;
    });
  }

  componentDidCatch() {}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='row'>
          <div className='form-control col col-lg-6'>
            <label className=''>Nombre</label>
            <input
              name='name'
              onChange={this.handleChange}
              type='text'
              placeholder='María'
            />
          </div>
          <div className='form-control col col-lg-6'>
            <label>Apellido</label>
            <input
              name='lastname'
              onChange={this.handleChange}
              type='text'
              placeholder='López'
            />
          </div>
        </div>
        <div className='form-control'>
          <label>Correo electrónico</label>
          <input
            name='email'
            onChange={this.handleChange}
            type='text'
            placeholder='ejemplo@dominio.com'
          />
        </div>
        <div className='form-control'>
          <label>Contraseña</label>
          <input
            name='password'
            onChange={this.handleChange}
            type='password'
            placeholder='•••••••••••••'
          />
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
              name='phone'
              onChange={this.handleChange}
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
              Registrarme
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
