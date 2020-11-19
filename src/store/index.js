import Vuex from 'vuex';
import Vue from 'vue';

import tempCrap from './modules/temporal-crap';
import cargas from './modules/cargas';
import alerta from './modules/alerta';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alerta,
    tempCrap,
    cargas,
  },
});
