import React, { Component } from 'react';

class AddressTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [
        {
          id: 1,
          departamento: 'Comayagua',
          municipio: 'Comayagua',
          direccion: 'Una direccion en algún lugar',
          coordenadas: '12.12321, 122.1231',
        },
        {
          id: 2,
          departamento: 'La Paz',
          municipio: 'San Jose',
          direccion: 'cerca del campo',
          coordenadas: '14.246611,-87.960346',
        },
      ],
    };
    this.funcionPrueba = this.funcionPrueba.bind(this);
  }

  funcionPrueba(addressId) {
    console.log('esto es un texto');
  }

  //functions
  render() {
    return (
      <section>
        <div className=''>
          <table>
            <thead>
              <tr>
                <th>Departamento</th>
                <th>Municipio</th>
                <th>Direccion</th>
                <th>Coordenadas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Debe ir una   funcion que itere entre las direcciones
                     y cree las rows */}

              {this.state.address.map((address) => {
                return (
                  <tr key={address.id}>
                    <td>{address.departamento}</td>
                    <td>{address.municipio}</td>
                    <td>{address.direccion}</td>
                    <td>{address.coordenadas}</td>
                    <button
                      className='button button-secondary'
                      value={address.id}
                      onClick={this.funcionPrueba(address.id)}
                    >
                      editar
                    </button>
                    <button className='button button-primary'>Elimiar</button>
                  </tr>
                );
              })}
              <tr>
                {/* Se usa texto  de demo demomento */}
                <td>Hola</td>
                <td>Hola</td>
                <td>Hola</td>
                <td>Hola</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default AddressTable;
