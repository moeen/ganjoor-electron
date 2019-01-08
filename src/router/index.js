import Vue from 'vue'
import Router from 'vue-router'

import Poets from '@/views/Poets'
import Poet from '@/views/Poet'
import Poems from '@/views/Poems'
import Verse from '@/views/Verse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poets-page',
      component: Poets
    },
    {
      path: '/poet/:id/:cat_id',
      name: 'poet-page',
      component: Poet
    },
    {
      path: '/poems/:poet_id/:id',
      name: 'poems-page',
      component: Poems
    },
    {
      path: '/verse/:id',
      name: 'verse-page',
      component: Verse
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
