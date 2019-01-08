<template>
  <div>
    <div v-for="verse in verses" :key="verse.id">
      <div style="width: 50%; float: right; text-align: left; padding-left: 5%; margin-bottom: 10px;" v-if="verse.position == 0">
        {{verse.text}}
      </div>
      <div style="width: 50%; float: left; text-align: right; padding-right: 5%; margin-bottom: 10px;" v-if="verse.position == 1">
        {{verse.text}}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'verse',
    data () {
      return {
        id: null
      }
    },
    beforeMount () {
      this.id = this.$route.params.id
      this.getVerses(this.id)
    },
    computed: mapState({ verses: state => state.verseModule.verses }),
    methods: mapActions(['getVerses'])
  }
</script>
