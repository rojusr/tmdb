<template>
  <div class="info">
      <Movie v-if="type=='movies' && !this.$store.state.isLoading" />
      <Show v-if="type=='tv' && !this.$store.state.isLoading" />
  </div>
</template>

<script>
import Movie from './Movie.vue'
import Show from './Show.vue'

export default {
  name: 'Info',
  data(){
    return {
    }
  },
  props: {
    type:String
  },
  computed:{

  },
  created(){
    this.$store.dispatch('find')
  },
  components: {
    Movie, Show
  },
}
</script>

<style>

</style>
