import axios from 'axios';

const state = {
  token: localStorage.getItem('token'),
  dioError: null,
  codigoEnviado: null,
  error: null,
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
      await axios
        .post('http://localhost:3300/customer', nuevoUsuario)
        .then((res) => localStorage.setItem('token', res.data.token))
        .then(() => localStorage.setItem('codigoEnviado', true));
      commit('setToken', localStorage.getItem('token'));
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

  async verifCodigo({ commit }, codigo) {
    try {
      const data = {
        token: localStorage.getItem('token'),
        code: codigo,
      };
      await axios
        .post('http://localhost:3300/customer/verify', data, {
          headers: {
            token: data.token,
          },
        })
        .then(() => {
          localStorage.setItem('condigoEnviado', false);
          window.location.href = '/';
        });

      commit('setCodigoEnviado', localStorage.getItem('codigoEnviado'));
    } catch (err) {
      commit('setDioError');
      commit('setError', err.response.data.error);
    }
  },
};

const mutations = {
  setDioError: (state) => (state.dioError = true),
  setError: (state, mensaje) => (state.error = mensaje),
  setToken: (state, token) => (state.token = token),
  setCodigoEnviado: (state, estado) => (state.codigoEnviado = estado),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
