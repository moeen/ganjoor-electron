import { Models } from '../../database/index'

const state = {
  verses: null
}

const actions = {
  getVerses ({ commit }, id) {
    commit('SET_FETCH', false)
    Models.Verse.findAll({
      where: {
        poem_id: id
      },
      raw: true
    })
      .then(res => {
        commit('SET_VERSES', res)
        commit('SET_FETCH', true)
      })
  }
}

const mutations = {
  SET_VERSES (state, verses) {
    state.verses = verses
  }
}

export default {
  state,
  mutations,
  actions
}
