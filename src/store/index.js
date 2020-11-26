import Vuex from 'vuex';
import Vue from 'vue';
import utils from './modules/utils'



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    utils
  },
});
