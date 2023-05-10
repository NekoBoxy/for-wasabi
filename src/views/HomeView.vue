<template>
  <CTabs />
  <h3>嗨我是首頁</h3>
  <p>請點選分頁</p>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';
import CTabs from '../components/CTabs.vue';
export default {
  components: {
    CTabs,
    RouterView,
  },
}
</script>