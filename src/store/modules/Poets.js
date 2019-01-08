import { Models } from '../../database/index'

const state = {
  poets: null
}

const actions = {
  getAllPoets ({ commit }) {
    Models.Poet.findAll({
      raw: true
    })
      .then(res => {
        commit('SET_POETS', res)
      })
  }
}

const mutations = {
  SET_POETS (state, poets) {
    state.poets = poets
  }
}

export default {
  state,
  mutations,
  actions
}
