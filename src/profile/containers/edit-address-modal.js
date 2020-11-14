import React, { Component } from 'react';

class EditAddressModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='modal-mask'>
        <div className='modal'>
          <div className='Modal-head'>
            <p className='modal-body'></p>Editar Direccion
          </div>
        </div>
        <form>
          <div>
            <label>Direccion 1</label>
            <input type='text' />
          </div>

          <div>
            <label>Direccion 2</label>
            <input type='text' />
          </div>

          <div>
            <label>Departamento</label>
            <select></select>
          </div>

          <div>
            <label>Municipio</label>
            <select></select>
          </div>

          <div>
            <label>Coordenadas</label>
            <input type='text' />
          </div>
        </form>
      </div>
    );
  }
}
export default EditAddressModal;
