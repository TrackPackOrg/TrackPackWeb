import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from '../../base/alert';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordVerif: '',
      passwordsDidMatch: null,
      phone: '',
      phoneExt: '504',
      displayAlert: false,
      alertContent: '',
      alertclasses: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validatePassword(this.state.password, this.state.passwordVerif);

    const user = {
      nombre: this.state.name,
      apellido: this.state.lastname,
      correo: this.state.email,
      passwd: this.state.password,
      telefono: this.state.phoneExt + this.state.phone,
    };
    if (this.state.passwordsDidMatch === true) {
      axios
        .post('http://localhost:3300/customer', user)
        .then((res) => {
          if (res.data.ok) {
            localStorage.setItem('clientId', res.data.clientId);
            this.setState({
              redirect: '/email-verification',
              displayAlert: true,
              alertContent: 'Tu registro se realizó con éxito',
              alertclasses: ['alert alert-success'],
            });
          }
        })
        .catch((err) => {
          this.setState({
            displayAlert: true,
            alertContent: err.response.data.error,
            alertclasses: 'alert alert-danger',
          });
        });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  validatePassword(pass1, pass2) {
    if (pass1 !== pass2) {
      this.setState({
        passwordsDidMatch: false,
        displayAlert: true,
        alertContent: 'Las contraseñas no coinciden.',
        alertclasses: 'alert alert-danger',
      });
    } else if (pass1 === pass2) {
      this.setState({
        passwordsDidMatch: true,
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.displayAlert ? (
          <Alert
            message={this.state.alertContent}
            classes={this.state.alertclasses}
          />
        ) : null}
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
          <input
            name='passwordVerif'
            onChange={this.handleChange}
            type='password'
            placeholder='•••••••••••••'
          />
        </div>
        <div className='form-control col col-2'>
          <label>Teléfono</label>
          <div className='row'>
            <input
              type='text'
              value={this.state.phoneExt}
              className='align-right col   col-lg-2'
              disabled={true}
            ></input>
            <input
              name='phone'
              onChange={this.handleChange}
              type='tel'
              pattern='[3,9,8,2]{1}[0-9]{7}'
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
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
      </form>
    );
  }
}

export default RegisterForm;
