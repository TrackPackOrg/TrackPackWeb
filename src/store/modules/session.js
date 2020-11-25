import Axios from 'axios';

const state = {
  sesion: localStorage.getItem('sesion'),
};

const getters = {
  token: (state) => state.token,
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  iniciarSesion({ commit }, payload) {
    Axios.post('http://localhost:3300/login', payload)
      .then((res) => {
        localStorage.setItem('sesion', res.data.token);
      })
      .then(() => commit('mutateSesion', localStorage.getItem('sesion')))
      .then(() => (window.location.href = 'perfil'))
      .catch((err) => {
        const data = {
          mensaje: err.response.data.error,
          tipo: 'is-danger',
        };
        commit('mutateAlerta', data);
        return data;
      });
  },
};

const mutations = {
  mutateAlerta(state, payload) {
    this.state.alerta.mensaje = payload.mensaje;
    this.state.alerta.tipo = payload.tipo;
  },
  mutateSesion: (state, payload) => (state.sesion = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
