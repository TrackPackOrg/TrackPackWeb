import Axios from 'axios';

const state = {
  tipos: [],
};

const getters = {
  tipos: (state) => state.tipos,
};

const actions = {
  fetchTipos({ commit }) {
    Axios.get('http://localhost:3300/package/packageType', {
      headers: { token: this.state.session.sesion },
    })
      .catch((err) => console.log(err.response))
      .then((res) => commit('mutateTipos', res.data.result));
  },
};

const mutations = {
  mutateTipos: (state, payload) => (state.tipos = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
