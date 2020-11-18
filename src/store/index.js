import Vuex from 'vuex';
import Vue from 'vue';

import usuario from './modules/usuario';
import cargas from './modules/cargas';
import alerta from './modules/alerta';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alerta,
    usuario,
    cargas,
  },
});
