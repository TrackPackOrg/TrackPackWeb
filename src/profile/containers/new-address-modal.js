import axios from 'axios';
import React, { Component } from 'react';

class NewAddressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: 0,
      states: [''],
    };
    this.fetchStates = this.fetchStates.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selectedState: e.target.value,
    });
    console.log(this.state.selectedState);
  }

  componentDidMount() {
    this.fetchStates();
  }

  fetchStates() {
    axios.get('http://localhost:3300/address/states').then((res) => {
      this.setState({
        states: res.data.states,
      });
    });
  }
  fetchCities(stateId) {
    axios.get(`http://localhost:3300/address/cities?stateId=${stateId}`);
  }

  render() {
    return (
      <div className='modal-mask'>
        <div className='modal'>
          <div className='modal-head'>
            <p className='modal-title'>Nueva Direccion</p>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-control'>
                <label>Direccion 1</label>
                <input type='text' />
              </div>
              <div className='form-control'>
                <label>Direccion 2</label>
                <input type='text' />
              </div>
              <div>
                <label>Departamento</label>
                <select>
                  {this.state.states.map((state) => {
                    return (
                      <option
                        value={state.idDepartamento}
                        onChange={this.handleChange}
                      >
                        {state.departamento}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label>Municipio</label>
                <select></select>
              </div>
              <div>
                <label>Coordenadas</label>
                <input type='text'></input>
              </div>
            </form>
          </div>
          <div class='modal-footer'>
            <button className='button-primary'>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewAddressModal;
