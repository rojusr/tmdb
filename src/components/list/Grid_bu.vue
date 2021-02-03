<template>
<div class="grid">

  <div class="item" @click="clicked(movie)" v-for="(movie, index) in arr" :key="index">
    <transition name="fade">

      <div class="outer_wrap" v-if="gridShow">
        <div class="inner_wrap">
          <div class="imgBox">

            <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w342/'+ movie.poster_path">
            <div v-if="!movie.poster_path" class="empty" :style="{backgroundColor: colors[Math.floor(Math.random()*colors.length)]}">
              <span>{{movie.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>


</div>
</template>

<!-- https://image.tmdb.org/t/p/w342/ -->

<script>
// import sample from '../data.json'
export default {
  name: 'Grid',
  props: {
    arr: Array,
    gridShow: Boolean
  },
  methods: {
    clicked: function(movie) {
      this.$emit('change', movie.id)
    }
  },
  data() {
    return {
      colors: [
        "#4f7696",
        "#315b7d",
        "#1d4769",
        "#223f57"
      ]
    }
  },
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.item {
  min-width: 240px;
  max-width: 342px;
  flex: 1;
  margin-bottom: 12px;
}

h3 {
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.9);
}

.outer_wrap {
  padding: 0 6px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.inner_wrap {
  flex: 1;
}

.imgBox {
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.45);
  height: 100%;
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}

.empty {
  position: relative;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
