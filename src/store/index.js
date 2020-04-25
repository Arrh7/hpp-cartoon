import Vue from 'vue'
import Vuex from 'vuex'
import CityModele from './modules/cityModules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city: CityModele
  }
})
