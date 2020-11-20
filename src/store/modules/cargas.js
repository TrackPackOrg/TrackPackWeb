//import axios from 'axios';

import Axios from 'axios';

const state = {
  cargas: [],
};

const getters = {
  cargas: (state) => state.cargas,
};

const actions = {
  fetchCargas({ commit }) {
    Axios.get('http://localhost:3300/load', {
      headers: { token: this.state.session.sesion },
    })
      .then((res) => commit('mutateCargas', res.data.result))
      .catch((err) => console.log(err.response.data.error));
  },
  aggCarga({ commit }, idDireccion) {
    Axios.post(
      'http://localhost:3300/load',
      { idDireccion: idDireccion },
      {
        headers: { token: this.state.session.sesion },
      }
    )
      .then((res) => commit('mutateNuevaCarga', res.data))
      .catch((err) => commit('mutateAlerta', err.response.data.error));
  },
};

const mutations = {
  mutateCargas: (state, payload) => (state.cargas = payload),
  mutateNuevaCarga: (state, payload) => state.cargas.unshift(payload),
  mutateAlerta(state, payload) {
    this.state.alerta.mensaje = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
