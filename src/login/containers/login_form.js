import axios from 'axios';
import React, { Component } from 'react';
import Alert from '../../base/alert';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserAuthenticated: localStorage.getItem('isUserAuthenticated'),
      redirect: null,
      email: null,
      password: null,
      displayAlert: false,
      alertContent: null,
      alertclasses: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    const data = {
      correo: this.state.email,
      passwd: this.state.password,
    };
    axios
      .post('http://localhost:3300/login', data)
      .then((res) => {
        if (res.data.ok) {
          localStorage.setItem('isUserAuthenticated', res.data.ok);
          localStorage.setItem('webtoken', res.data.token);
          this.setState({
            redirect: '/profile',
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
    e.preventDefault();
  }

  render() {
    return !this.state.isUserAuthenticated ? (
      <form onSubmit={this.handleSubmit}>
        {this.state.displayAlert ? (
          <Alert
            message={this.state.alertContent}
            classes={this.state.alertclasses}
          />
        ) : null}
        <div className='form-control'>
          <label>Correo eletrónico</label>
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
          <div className='row'>
            <button type='submit' className='button button-primary col-lg-12'>
              Iniciar
            </button>
          </div>
        </div>
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
      </form>
    ) : (
      <Redirect to='/profile' />
    );
  }
}

export default LoginForm;
