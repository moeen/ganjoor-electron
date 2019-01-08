import { Models } from '../../database/index'

const state = {
  poems: null,
  poemsCat: null
}

const actions = {
  getPoems ({ commit }, details) {
    Models.Poem.findAll({
      where: {
        cat_id: details.id
      },
      raw: true
    })
      .then(res => {
        commit('SET_POEMS', res)
      })
  },
  getPoemsCat ({ commit }, details) {
    Models.Cat.findAll({
      where: {
        poet_id: details.poetId,
        parent_id: details.id
      },
      raw: true
    })
      .then(res => {
        commit('SET_POEMS_CAT', res)
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
