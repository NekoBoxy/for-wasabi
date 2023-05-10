<template>
  <RouterLink to="/">
    <button type="button" class="btn btn-primary">回首頁</button>
  </RouterLink>
  <RouterLink to="/list">
    <button type="button" class="btn btn-primary">List</button>
  </RouterLink>
</template>


<script>
import { RouterLink } from 'vue-router';
export default {
  components: {
    RouterLink,
  },
}
</script>
