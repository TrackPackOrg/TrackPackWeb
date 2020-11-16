//import axios from 'axios';

const state = {
  id: 1,
  nombre: 'Admin',
  apellido: 'Trackpack',
  correo: 'admin@trackpack.com',
  contra: '1234',
  telefono: '+50487616959',
};

const getters = {
  storeid: (state) => state.id,
  storenombre: (state) => state.nombre,
  storeapellido: (state) => state.apellido,
  storecorreo: (state) => state.correo,
  storecontra: (state) => state.contra,
  storetelefono: (state) => state.telefono,
};

const actions = {
  cambiarNombre({ commit }) {
    commit('setName', 'Eduardo');
  },
};

const mutations = {
  setName: (state, nombre) => (state.nombre = nombre),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
