<template>
<div class="container">

  <div ref="bgIMG" class="background">
    <!-- <transition name="fade"> -->
    <!-- <subImage :src="backdrop"/> -->

      <!-- <img  :src="src" v-on:load="onLoaded" :key="trigger" v-show="loaded">&nbsp; -->
    <!-- </transition> -->
    <div class="gradient"></div>
  </div>

  <!-- <transition name="mainFade"> -->
    <div class="wrapper" v-show="!playvideo">

      <div class="playerSection">
        <div @click='loadvideo' v-if="trailer">
          <div  class="play"><i class="icofont-ui-play"></i></div>
          <span>Watch trailer</span>
        </div>
      </div>

      <div class="mainSection">
        <div class="main">
          <div class="close" @click="$emit('close', 'register')"> Close <i class="icofont-close-line"></i></div>
          <div class="genres">{{genres}}</div>
          <div class="title">
            <h1>{{movie.title}}</h1>
            <h2>{{movie.tagline}}</h2>
          </div>

          <div class="details">
            <div class="info">
              <span>{{movie.release_date.split("-")[0]}} &#183; {{timeConvert}}</span>
            </div>
            <div class="rating">
              <div class="stars">
                <i class="icofont-star" v-for="index in 5" :key="index" :class="{ starFilled: rating>=index }"></i>
              </div>
              {{movie.vote_average*0.5}}<span style="opacity:0.6">/5</span>
            </div>

          </div>
          <p>{{movie.overview}}</p>

        </div>
      </div>


    </div>
  <!-- </transition> -->


  <div v-if="playvideo" class="player">
    <div class="playerOuter">
      <div class="playerInner">
        <iframe :src="trailer" frameborder="0" allowfullscreen autoplay=1 width="560" height="315"></iframe>
      </div>
      <div class="playerClose" @click="closeVideo"><i class="icofont-close-line"></i></div>

    </div>
  </div>





</div>
</template>


<script>
export default {
  name: 'Details',
  props: {
    movie: Object
  },
  mounted: function () {
    var image = new Image()
    var that =  this
    this.loaded = image.addEventListener('load', function(){that.onLoaded()})
    image.src = this.src
    // setTimeout(() => this.trigger = true, 500);
    setTimeout(() => this.$refs.bgIMG.style.opacity = 0.5, 10);

  },
  methods: {
    onLoaded() {
      this.loaded = true
      // this.trigger = !this.trigger;
      // this.$refs.bgIMG.style.opacity = 1;
    },
    update() {
      this.loaded = false
      var image = new Image()
      var that = this
      this.loaded = image.addEventListener('load', function() {
        that.onLoaded()

      })
      image.src = this.src
    },
    loadvideo: function() {
      this.playvideo = !this.playvideo
    },
    closeVideo() {
      this.playvideo = false
    }
  },

  computed: {
    genres: function() {
      let g;
      let temp = [];
      for (g of this.movie.genres) {
        temp.push(g.name)
      }
      return temp.join(" | ")
    },
    rating: function() {
      return Math.round(this.movie.vote_average * 0.5)
    },
    timeConvert: function() {
      var num = this.movie.runtime;
      var hours = (num / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + "h " + rminutes + "min";
    },
    trailer: function() {
      if(this.movie.videos.results[0]){

         return 'http://www.youtube.com/embed/' + this.movie.videos.results[0].key + '?autoplay=1'
      }
    }
  },

  data() {
    return {
      playvideo: false,
      loaded: false,
      src: 'https://image.tmdb.org/t/p/original/' + this.movie.backdrop_path,
      trigger:false
    }
  },
}
</script>

<style scoped>

.container {
  width: 100%;
  height: 100vh;
  font-family: roboto;
}

.background {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #000;
  z-index: -5;
  opacity: 0;
  transition: opacity 1s;
}

.gradient {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%,
      rgb(0, 0, 0, 0.7) 70%);
  width: 100%;
  height: 100vh;
  position: absolute;
  top:0;
}

.background img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* opacity: 0; */
  transition: opacity 1s;
  position: absolute;
}

.wrapper {

}
.mainSection{
}
.playerSection {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
}
.main{
  margin:auto;
  max-width: 1024px;
  padding:48px;
}




.close {
  cursor: pointer;
}

.title h1,
.title h3 {
  font-family: roboto condensed;
}

.title h1 {
  font-size: 42px;
  /* margin: 0; */
}

.content {
  display: flex;
}

.details {
  display: flex;
}
.genres{
  font-size: 14px;
  text-transform: uppercase;
}
.rating {
  display: flex;
  align-items: center;
}

.stars {
  margin-right: 8px;
}

.starFilled {
  color: #ffd15c;
}

.info {
  margin-right: 18px;
}



.close {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
}

.close i {
  font-size: 24px;
}


.playerSection div{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
.playerSection span{
  margin-top: 12px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 1px;
}
.player {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  padding: 80px;
  box-sizing: border-box;
}

.playerOuter {
  display: flex;
  width: 100%;
  height: 100%;
}

.playerInner {
  position: relative;
  /* padding-top: 56.25%; */
  width: 100%;
  height: 100%;
}

.player iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.playerClose {
  font-size: 48px;
  margin-left: 20px;
  cursor: pointer;
}

.play {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.24);
}
.play i{
  color:#fff;
  font-size: 28px;
  width:20px;
}
p {
  line-height: 24px;
}


.visible{
  opacity:1;
}
.fade-enter-active {
  transition: opacity 3s ease-in-out;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter{
  opacity: 0;
}


.mainFade-enter-active {
  transition: all .5s ease-out;
}
.mainFade-leave-active {
  transition: all 1s ease-in;
}
.mainFade-enter,
.mainFade-leave-to {
  opacity: 0;
}
</style>
