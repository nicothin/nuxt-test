<template>
  <div class="container111">
    <h1 v-if="error.statusCode === 404">Страница не найдена 11</h1>
    <h1 v-else>Произошла ошибка</h1>
    <div class="links">
      111
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
