//import axios from 'axios';

const state = {
  mensaje: '',
  tipo: '',
};

const getters = {
  mensaje: (state) => state.mensaje,
  tipo: (state) => state.tipo,
};

const actions = {
  dioError({ commit }, data) {
    commit('mutateAlerta', data);
  },
};

const mutations = {
  mutateAlerta(state, payload) {
    this.state.alerta.mensaje = payload.mensaje;
    this.state.alerta.tipo = payload.tipo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
