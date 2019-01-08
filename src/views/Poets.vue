<template>
  <div>
    <div class="columns is-multiline">
      <div v-for="poet in poets" :key="poet.id" class="column is-half">
        <router-link :to="'/poet/' + poet.id + '/' + poet.cat_id" class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{poet.name}}</strong>
                  <br>
                  {{poet.description}}
                </p>
              </div>
            </div>
          </article>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'poets',
    beforeMount() {
      this.getAllPoets()
    },
    computed: mapState({ poets: state => state.poetsModule.poets }),
    methods: mapActions(['getAllPoets'])
  }
</script>