import Vue from 'vue'
import Vuex from 'vuex'

import poetsModule from './modules/Poets'
import poetModule from './modules/Poet'
import poemsModule from './modules/Poems'
import verseModule from './modules/Verse'
import loadingModule from './modules/Loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    poetsModule,
    poetModule,
    poemsModule,
    verseModule,
    loadingModule
  },
  strict: process.env.NODE_ENV !== 'production'
})
