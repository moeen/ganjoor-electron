<template>
  <div id="app">
    <section class="hero is-primary" dir="ltr">
      <div class="hero-body" style="padding: 1rem 1.5rem;">
        <div class="container">
          <a @click="$router.go(-1)">
            <font-awesome-icon icon="chevron-left" style="font-size: 1.3rem; margin: 0 10px;" />
          </a>
          <router-link to="/">
            <font-awesome-icon icon="home" style="font-size: 1.3rem; margin: 0 10px;" />
          </router-link>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <router-view :key="this.$route.fullPath"></router-view>
      </div>
    </section>
  </div>
</template>

<style>
#app {
  font-family: 'Vazir', sans-serif;
}
</style>
