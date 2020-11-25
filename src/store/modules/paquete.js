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

  aggPaquete({ commit }, data) {
    Axios.post('http://localhost:3300/package', data, {
      headers: { token: this.state.session.sesion },
    })
      .then(() => {
        const data = {
          mensaje: 'Se agrego correctamente',
          tipo: 'is-success',
        };
        commit('mutateAlerta', data);
      })
      .catch((err) => {
        const data = {
          mensaje: err.response.data.error,
          tipo: 'is-danger',
        };
        commit('mutateAlerta', data);
      });
  },

  eliminarPaquete({ commit }, idPaquete) {
    Axios.delete(`http://localhost:3300/package?idPaquete=${idPaquete}`, {
      headers: {
        token: this.state.session.sesion,
      },
    })

      .then(() => {
        const data = {
          mensaje: 'Se eliminó correctamente',
          tipo: 'is-success',
        };
        commit('mutateAlerta', data);
      })
      .catch((err) => {
        const data = {
          mensaje: err.response.data.error,
          tipo: 'is-danger',
        };

        commit('mutateAlerta', data);
      });
  },
};

// eslint-disable-next-line no-unused-vars

const mutations = {
  mutatePaquetes: (state, payload) => (state.paquetes = payload),
  mutateNuevoPaquetes: (state, payload) => state.paquetes.unshift(payload),
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
