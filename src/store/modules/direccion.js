import Axios from 'axios';

const state = {
  direcciones: [],
  departamentos: [],
  municipios: [],
};

const getters = {
  direcciones: (state) => state.direcciones,
  departamentos: (state) => state.departamentos,
  municipios: (state) => state.municipios,
};

const actions = {
  fetchDirecciones({ commit }) {
    Axios.get('http://localhost:3300/address', {
      headers: {
        token: this.state.session.sesion,
      },
    })
      .then((res) => {
        commit('mutateDirecciones', res.data.result);
      })
      .catch((err) => console.log(err.response.data.error));
  },

  fetchDepartamentos({ commit }) {
    Axios.get('http://localhost:3300/address/states').then((res) =>
      commit('mutateDepartamentos', res.data.states)
    );
  },

  fetchMunicipios({ commit }, event) {
    Axios.get('http://localhost:3300/address/cities', {
      params: { stateId: event.target.value },
    }).then((res) => commit('mutateMunicipios', res.data.cities));
  },

  aggDireccion({ commit }, payload) {
    Axios.post('http://localhost:3300/address/customer', payload, {
      headers: { token: this.state.session.sesion },
    })
      .then(() => {
        commit('mutateNuevaDireccion', payload);
        commit('mutateAlerta', '');
      })
      .catch((err) => commit('mutateAlerta', err.response.data.error));
  },
};

const mutations = {
  mutateDirecciones: (state, payload) => (state.direcciones = payload),
  mutateDepartamentos: (state, payload) => (state.departamentos = payload),
  mutateMunicipios: (state, payload) => (state.municipios = payload),
  mutateNuevaDireccion: (state, payload) => state.direcciones.unshift(payload),
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
