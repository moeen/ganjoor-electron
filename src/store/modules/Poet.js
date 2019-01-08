import { Models } from '../../database/index'

const state = {
  cats: null
}

const actions = {
  getCats ({ commit }, details) {
    commit('SET_FETCH', false)
    Models.Cat.findAll({
      where: {
        poet_id: details.id,
        parent_id: details.catId
      },
      raw: true
    })
      .then(res => {
        commit('SET_CATS', res)
        commit('SET_FETCH', true)
      })
  }
}

const mutations = {
  SET_CATS (state, cats) {
    state.cats = cats
  }
}

export default {
  state,
  mutations,
  actions
}
