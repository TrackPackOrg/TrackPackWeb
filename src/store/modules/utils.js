const state = {
  opcionMenu: 'cargas',
  modalPaquetesActivo: true,
  idCargaRastreo: ''
};
const getters = {
  opcionMenu: (state) => state.opcionMenu,
  idCargaRastreo: (state) => state.idCargaRastreo
};
const actions = {
  cambiarOpcion({ commit }, opcion) {
    commit('mutateOpcionMenu', opcion);
  },
  estableceIdCarga({commit}, carga){
    commit('mutateidCargaRastreo', carga)
  }
};
const mutations = {
  mutateOpcionMenu: (state, payload) => (state.opcionMenu = payload),
  mutateidCargaRastreo: (state, payload) => (state.idCargaRastreo = payload)
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
