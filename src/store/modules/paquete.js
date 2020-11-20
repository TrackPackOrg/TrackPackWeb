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
};

const mutations = {
  mutatePaquetes: (state, payload) => (state.paquetes = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
