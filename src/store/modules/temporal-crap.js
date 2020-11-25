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
      commit('mutateAlerta', '');
    } catch (err) {
      const data = {
        mensaje: err.response.data.error,
        tipo: 'is-danger',
      };
      commit('mutateAlerta', data);
    }
  },

  dioError({ commit }, mensaje) {
    const data = {
      mensaje: mensaje,
      tipo: 'is-danger',
    };
    commit('mutateAlerta', data);
  },

  dioErrorVerifContra({ commit }) {
    const data = {
      mensaje: 'Las contraseñas no coinciden.',
      tipo: 'is-danger',
    };
    commit('mutateAlerta', data);
  },

  dioErrorCamposVacios({ commit }) {
    const data = {
      mensaje: 'Todos los campos son obligatorios',
      tipo: 'is-danger',
    };
    commit('mutateAlerta', data);
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
          commit('mutateAlerta', '');
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
