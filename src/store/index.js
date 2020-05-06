import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myProfil: []
  },
  mutations: {
    getProfil (state, data) {
      state.myProfil = data
    }
  },
  actions: {
    profilUser (context) {
      Axios.get('http://192.168.1.97:5000/api/lalavent/user/1')
        .then((res) => {
          context.commit('getProfil', res.data.user)
        })
    }
  },
  modules: {
  }
})
