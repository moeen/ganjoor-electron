import { Models } from '../../database/index'

const state = {
  poems: null,
  poemsCat: null
}

const actions = {
  getPoems ({ commit }, details) {
    commit('SET_FETCH', false)
    Models.Poem.findAll({
      where: {
        cat_id: details.id
      },
      raw: true
    })
      .then(res => {
        commit('SET_POEMS', res)
        commit('SET_FETCH', true)
      })
  },
  getPoemsCat ({ commit }, details) {
    commit('SET_FETCH', false)
    Models.Cat.findAll({
      where: {
        poet_id: details.poetId,
        parent_id: details.id
      },
      raw: true
    })
      .then(res => {
        commit('SET_POEMS_CAT', res)
        commit('SET_FETCH', true)
      })
  }
}

const mutations = {
  SET_POEMS (state, poems) {
    state.poems = poems
  },
  SET_POEMS_CAT (state, poemsCat) {
    state.poemsCat = poemsCat
  }
}

export default {
  state,
  mutations,
  actions
}
