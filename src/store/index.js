import { createStore } from 'vuex'
import { setProp } from './utils/mutations'
import clients from './modules/clients'
import supplyPoints from './modules/supply-points'

export default createStore({
  state: () => ({
    loading: false
  }),
  mutations: {
    setLoading: setProp('loading')
  },
  actions: {
    loadData: ({ commit, dispatch }) => {
      commit('setLoading', true)
      return Promise.all([
        dispatch('clients/loadData'),
        dispatch('supplyPoints/loadData')
      ]).finally(() => commit('setLoading', false))
    }
  },
  modules: {
    clients,
    supplyPoints
  }
})
