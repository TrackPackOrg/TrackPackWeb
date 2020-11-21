import Axios from 'axios';
const state = {
  paquetes: [],
};

const getters = {
  paquetes: (state) => state.paquetes,
};

const actions = {
  fetchPaquetes({ commit }, payload) {
    Axios.get('http://localhost:3300/package/byLoadId', {
      headers: { token: this.state.session.sesion },
      params: {
        idCarga: payload,
      },
    })
      .then((res) => commit('mutatePaquetes', res.data.result))
      .catch((err) => console.log(err.response));
  },

  // eslint-disable-next-line no-unused-vars
  aggPaquete({ commit }, data) {
    Axios.post('http://localhost:3300/package', data, {
      headers: { token: this.state.session.sesion },
    })
      .then(() => commit('mutateAlerta', ''))
      .catch((err) => commit('mutateAlerta', err.response.data.error));
  },
  // eslint-disable-next-line no-unused-vars
  eliminarPaquete({ commit }, idPaquete) {
    console.log(idPaquete);
    Axios.delete(`http://localhost:3300/package?idPaquete=${idPaquete}`, {
      headers: {
        token: this.state.session.sesion,
      },
    })
      .then(() => {
        commit('mutateAlerta', '');
      })
      .catch((err) => commit('mutateAlerta', err.response.data.error));
  },
};

const mutations = {
  mutatePaquetes: (state, payload) => (state.paquetes = payload),
  mutateNuevoPaquetes: (state, payload) => state.paquetes.unshift(payload),
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
