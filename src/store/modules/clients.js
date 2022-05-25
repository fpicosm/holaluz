import { setProp } from '../utils/mutations'

const API_URL = 'fakes/clients.json'

export default {
  namespaced: true,

  state: () => ({
    data: []
  }),

  getters: {
    getByCups: ({ data }) => cups => data.find(client => client.cups === cups)
  },

  mutations: {
    setData: setProp('data')
  },

  actions: {
    loadData ({ commit }) {
      return fetch(API_URL)
        .then(r => r.json())
        .then(data => commit('setData', data))
    }
  }
}
