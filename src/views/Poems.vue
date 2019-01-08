<template>
  <div>
    <ol type="1" style="padding: 15px;">
      <li v-for="poem in poems" :key="poem.id">
        <router-link :to="'/verse/' + poem.id" :key="poem.id">
          {{poem.title}}
        </router-link>
      </li>
      <li v-for="poem in poemsCat" :key="poem.id">
        <router-link :to="'/poems/' + poem.poet_id + '/' + poem.id" :key="poem.id">
          {{poem.text}}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'poems',
    data () {
      return {
        details: {
          id: null,
          poetId: null
        }
      }
    },
    beforeMount () {
      this.details.id = this.$route.params.id
      this.details.poetId = this.$route.params.poet_id
      this.getPoems(this.details)
      this.getPoemsCat(this.details)
    },
    computed: mapState({
      poems: state => state.poemsModule.poems,
      poemsCat: state => state.poemsModule.poemsCat
    }),
    methods: mapActions([
      'getPoems',
      'getPoemsCat'
    ])
  }
</script>