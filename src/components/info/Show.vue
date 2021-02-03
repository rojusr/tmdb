<template>
  <div class="show">
    <h1>{{show.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data(){
    return {
    }
  },
  props: {
  },
  computed:{
    show(){
      return this.$store.state.object
    }
  },
  created(){
  },
  // mounted(){
  //   alert("mounted:"+this.id )
  // }
}
</script>

<style>

</style>
