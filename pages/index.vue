<template lang="md">

  <AppLogo />

  # Hello World! {{ name }} {{ name.length }}

  Current route is: {{ $route.path }}

  <span v-if="seen">Сейчас меня видно</span>

  <div class="test">Это див</div>

  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>

  <button v-on:click="reverseMsg">reverse</button>

  <a href="google.ru">google</a>

  <hr>

  <input type="text" v-model="name">

  <hr>

  <MainNav />
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: {
    AppLogo,
    MainNav,
  },
  head: {
    title: 'ЕНТО ТИТЛЕ!'
  },
  data () {
    return {
      name: 'World',
      seen: true,
      todos: [
        {text: 'Изучить вью'},
        {text: 'Напиться'},
        {text: 'Выкинуть реакт'},
      ]
    }
  },
  methods: {
    reverseMsg: function() {
      this.name = this.name.split('').reverse().join('');
      this.seen = !this.seen;
    },
  },
  created: function() {
    // console.log('index component created');
    // console.log(this);
  }
}
</script>

<style lang="scss"></style>

