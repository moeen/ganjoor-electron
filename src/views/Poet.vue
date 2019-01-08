<template>
  <div>
    <ol type="1" style="padding: 15px;">
      <li v-for="cat in cats" :key="cat.id">
        <router-link :to="'/poems/' + cat.poet_id + '/' + cat.id">
          {{cat.text}}
          <br>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'poet',
    data () {
      return {
        details: {
          id: null,
          catId: null
        }
      }
    },
    beforeMount () {
      this.details.id = this.$route.params.id
      this.details.catId = this.$route.params.cat_id
      this.getCats(this.details)
    },
    computed: mapState({ cats: state => state.poetModule.cats }),
    methods: mapActions(['getCats'])
  }
</script>
