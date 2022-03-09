<template>
  <div class="home">
      <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '../components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    Dashboard,
  }
}
</script>

<style scoped>
.flex-display{
  display: flex;
  flex-flow: wrap;
}
</style>
