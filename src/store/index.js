import Vuex from 'vuex';
import Vue from 'vue';

import usuario from './modules/usuario';
import cargas from './modules/cargas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    usuario,
    cargas,
  },
});
