import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import buyphone from './buyphone'
import other from './other'

const store = new Vuex.Store ({
	modules: {
		buyphone, other
	}
})

export default store