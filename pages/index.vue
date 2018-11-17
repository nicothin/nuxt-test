<template lang="md">

  <AppLogo />

  # Hello World! {{ name }}

  Current route is: {{ $route.path }}

  <a href="google.ru">google</a>

  <hr>

  [fooooo](https://nicothin.pro)

  <hr>

  <MainNav />
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: {
    AppLogo,
    MainNav
  },
  head: {
    title: 'ЕНТО ТИТЛЕ!'
  },
  data () {
    return { name: 'World' }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  // a {
  //   color: #000;
  // }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

