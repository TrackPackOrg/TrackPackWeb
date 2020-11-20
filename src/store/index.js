import Vuex from 'vuex';
import Vue from 'vue';

import tempCrap from './modules/temporal-crap';
import cargas from './modules/cargas';
import session from './modules/session';
import alerta from './modules/alerta';
import direccion from './modules/direccion';
import paquete from './modules/paquete';
import currier from './modules/currier';
import tipo from './modules/tipo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    alerta,
    tempCrap,
    cargas,
    paquete,
    currier,
    direccion,
    tipo,
  },
});
