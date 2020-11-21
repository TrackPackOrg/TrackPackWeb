import Axios from 'axios';

const state = {
  curriers: [],
};

const getters = {
  curriers: (state) => state.curriers,
};

const actions = {
  fetchCurriers({ commit }) {
    Axios.get('http://localhost:3300/package/curriers', {
      headers: { token: this.state.session.sesion },
    }).then((res) => commit('mutateCurriers', res.data.result));
  },
};

const mutations = {
  mutateCurriers: (state, payload) => (state.curriers = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
