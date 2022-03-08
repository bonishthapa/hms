<template>
  <div class="home">
    <Navbar />
    <div class="flex-display">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Dashboard from '../components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
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
