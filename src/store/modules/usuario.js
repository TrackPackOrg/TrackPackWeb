import axios from 'axios';

const state = {
  token: null,
  dioError: null,
  error: null,
  codigoEnviado: localStorage.getItem('codigoEnviado'),
};

const getters = {
  token: (state) => state.token,
  dioError: (state) => state.dioError,
  error: (state) => state.error,
  codigoEnviado: (state) => state.codigoEnviado,
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async registrarUsuario({ commit }, nuevoUsuario) {
    try {
      await axios.post('http://localhost:3300/customer', nuevoUsuario);
      localStorage.setItem('codigoEnviado', true);
      console.log(localStorage.getItem('codigoEnviado'));
      commit('setCodigoEnviado', localStorage.getItem('codigoEnviado'));
    } catch (err) {
      commit('setDioError');
      commit('setError', err.response.data.error);
    }
  },

  dioErrorVerifContra({ commit }) {
    commit('setDioError');
    commit('setError', 'Las contraseñas no coinciden.');
  },
  dioErrorCamposVacios({ commit }) {
    commit('setDioError');
    commit('setError', 'Todos los campos son obligatorios.');
  },
};

const mutations = {
  setDioError: (state) => (state.dioError = true),
  setError: (state, mensaje) => (state.error = mensaje),
  setCodigoEnviado: (state, estado) => (state.codigoEnviado = estado),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
