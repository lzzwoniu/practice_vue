import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 666,
  },
  getters: {
    getStateCount: function(states){
      return states.count + 1
    }
  },
  mutations: {
    add(states){
      states.count = states.count + 1
    },
    reduction(states){
      var n = 10;
      states.count = states.count - n
    }
  },
  actions: {
    addFun(content){
      content.commit("add")
    },
    reductionFun(content, n){
      content.commit("reduction", n)
    }
  }
})
