import AddressBox from './components/address';
import React, { Component } from 'react';

function Profile() {
  return (
    <div className='row'>
      <div className='col col-lg-4'>
        <h2></h2>
      </div>
      <div className='col col-lg-8'>
        <AddressBox />
      </div>
    </div>
  );
}

export default Profile;
