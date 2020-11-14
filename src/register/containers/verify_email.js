import axios from 'axios';
import React, { Component } from 'react';
import Alert from '../../base/alert';
import { Redirect } from 'react-router-dom';

class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      displayAlert: false,
      alertContent: null,
      alertclasses: null,
      code: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clientId = localStorage.getItem('clientId');
    const data = {
      idCliente: +clientId,
      code: this.state.code,
    };
    console.log(data);
    axios
      .post('http://localhost:3300/customer/verify', data)
      .then((res) => {
        if (res.data.ok) {
          this.setState({
            redirect: '/inicio-sesion',
          });
        }
      })
      .catch((err) => {
        this.setState({
          displayAlert: true,
          alertContent: 'Ha ocurrido un error en la verificación del código.',
          alertclasses: 'alert alert-danger',
        });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <section>
        <div className='container is-hcentered'>
          <div className='card'>
            {this.state.displayAlert ? (
              <Alert
                message={this.state.alertContent}
                classes={this.state.alertclasses}
              />
            ) : null}
            <h3 className='card-title'>Confirma tu correo electrónico.</h3>
            <div className='align-center'>
              <img src='inbox.png'></img>
            </div>
            <div className='align-center'>
              Hemos enviado un código a tu correo electrónico para <br />
              verificar que es de tu propiedad. Introduce tu código para
              verificar tu correo.
            </div>
            <div className='form-control'>
              <input
                type='text'
                name='code'
                onChange={this.handleChange}
                placeholder='Introduce tu código aquí.'
              />
            </div>
            <div className='form-control'>
              <button
                className='button button-primary'
                onClick={this.handleClick}
              >
                Verificar
              </button>
            </div>
          </div>
        </div>
        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
      </section>
    );
  }
}
export default VerifyEmail;
