import React, { Component } from 'react';

class AddressTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: [
        {
          departamento: 'Comayagua',
          municipio: 'Comayagua',
          direccion: 'Una direccion en algún lugar',
          coordenadas: '12.12321, 122.1231',
        },
        {
          departamento: 'La Paz',
          municipio: 'San Jose',
          direccion: 'cerca del campo',
          coordenadas: '14.246611,-87.960346',
        },
      ],
    };
  }

  //functions

  render() {
    return (
      <section>
        <div className='container'>
          <h1 class='h2'>Direccion</h1>
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

              {this.state.address.map((address, index) => {
                return (
                  <tr key={index}>
                    <td>{address.departamento}</td>
                    <td>{address.municipio}</td>
                    <td>{address.direccion}</td>
                    <td>{address.coordenadas}</td>
                    <button className='button button-secondary'>
                      {' '}
                      Editar
                    </button>{' '}
                    <button className='button button-primary'>
                      {' '}
                      Elimiar
                    </button>{' '}
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
