<template>
  <div class="container111">
    <h1 v-if="error.statusCode === 404">404 Страница не найдена</h1>
    <h1 v-else>Произошла  ошибка {{  error.statusCode  }}</h1>
    <div class="links">
      Это печалит меня.
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
