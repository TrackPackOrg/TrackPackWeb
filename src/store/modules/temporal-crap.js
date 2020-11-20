import axios from 'axios';

const state = {
  token: localStorage.getItem('token'),
  codigoEnviado: null,
};

const getters = {
  token: (state) => state.token,
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
      commit('mutateAlerta', err.response.data.error);
    }
  },

  dioErrorVerifContra({ commit }) {
    commit('mutateAlerta', 'Las contraseñas no coinciden.');
  },

  dioErrorCamposVacios({ commit }) {
    commit('mutateAlerta', 'Todos los campos son obligatorios');
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
      commit('mutateAlerta', err.response.data.error);
    }
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  setCodigoEnviado: (state, estado) => (state.codigoEnviado = estado),
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
