<template>
    <transition name="fade">
      <img :src="src" @load="onLoaded" v-show="loaded" >
      <!-- <img :src="src" v-on:load="onLoaded" v-show="loaded"> -->
      <!-- <img :src="src" :class="{ hidden: !loaded }"> -->
      <!-- <img :src="src"> -->

    </transition>
</template>


<script>
export default {
  name: 'subImage',
  data: function() {
    return {
      loaded: false,
      isMounted: false,
      // src:"http://via.placeholder.com/350x150"
    }
  },
  props:{
    src: String
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  },
  // mounted: function () {
  //   this.isMounted = true;
  //   var image = new Image()
  //   image.onload = function () {
  //       this.loaded=true
  //     };
  //   image.src = this.src
  // },

}
</script>



<style>
img{
  display:block;
}

</style>

<style scoped>

/* img{
  transition: opacity 2s;
}
.hidden{
  opacity:0;
}

.imgfade-enter-active, .imgfade-leave-active {
  transition: opacity 0.2s;
}
.imgfade-enter, .imgfade-leave-to {
  opacity: 0;
} */

.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>
