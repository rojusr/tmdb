<template>
  <div class="sidebar">
    <div class="logo">TMDB</div>
    <Filters />
</div>
</template>


<script>
import Filters from './Filters.vue'


export default {
  name: 'Sidebar',
  components: {
    Filters,
  },

}
</script>



<style scoped>
.logo {
  text-align: center;
  margin-top: 0;
  margin-bottom: 62px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 24px;
}
.sidebar{
  background-image: linear-gradient(0deg, #131c25, #0e2331);
}
</style>
