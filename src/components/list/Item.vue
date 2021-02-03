<template>
  <div class="outer_wrap">
      <div class="inner_wrap">
        <div class="imgBox">
          <subImage v-if="object.poster_path" :src="src" />
          <div v-if="!object.poster_path" class="empty" :style="{backgroundColor: colors[Math.floor(Math.random()*colors.length)]}">
            <span>{{object.title}}{{object.name}}</span>
          </div>
        </div>
      </div>

  </div>
</template>


<script>
import subImage from '../_sub/subImage.vue'

export default {
  name: 'Item',
  props: {
    object: Object
  },
  data() {
    return {
      colors: [
        "#4f7696",
        "#315b7d",
        "#1d4769",
        "#223f57"
      ],
      // src: 'https://image.tmdb.org/t/p/w342' + this.object.poster_path,
      loaded: false,
    }
  },
  mounted: function() {
    // this.update()
  },
  methods: {
    onLoaded() {
      this.loaded = true
    },
    // update() {
    //   this.loaded = false
    //   var image = new Image()
    //   var that = this
    //   this.loaded = image.addEventListener('load', function() {
    //     that.onLoaded()
    //   })
    //   image.src = this.src
    // }
  },
  computed:{
    src(){
      return 'https://image.tmdb.org/t/p/w342' + this.object.poster_path
    }
  },
  watch: {
    movie: function() {
      // this.update()
    }
  },
  components: {
    subImage,
  },

}
</script>

<style scoped>


h3 {
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);
}

.outer_wrap {
  padding: 0 6px;
}

.inner_wrap {
}

.imgBox {
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.45);
  position: relative;
  padding-top: 156.3%
}

img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.empty {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

}

.empty span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  width: 70%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
