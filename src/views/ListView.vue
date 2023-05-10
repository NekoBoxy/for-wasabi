<template>
  <CTabs />
  <table>
    <tr>
      <td>name</td>
      <td>gender</td>
      <td>job</td>
    </tr>
    <tr v-for="people in peoples" :key="people.name" class="td-style">
      <td>{{ people.name }}</td>
      <td>{{ people.gender }}</td>
      <td>{{ people.job }}</td>
    </tr>
  </table>
</template>

<script>
import CTabs from '../components/CTabs.vue';
export default {
  data() {
    return {
      peoples: [
        {
          name: "john",
          gender: "m",
          job: 1,
        },
        {
          name: "mary",
          gender: "f",
          job: 2,
        },
      ]
    }
  },
  components: {
    CTabs,
  },
}
</script>


