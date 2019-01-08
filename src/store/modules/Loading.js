const state = {
  fetched: true
}

const mutations = {
  SET_FETCH (state, fetch) {
    state.fetched = fetch
  }
}

const getters = {
  fetched: state => {
    return state.fetched
  }
}

export default {
  state,
  mutations,
  getters
}
