<template>
<div class="container">

  <div class="columns">
    <div class="column left">

      <div class="poster">
        <div class="imgBox" ref="bgIMG">
          <!-- <img :src="src" v-on:load="onLoaded" :key="trigger" v-show="loaded"> -->
        </div>

        <!-- <div @click='loadvideo' v-if="trailer">
        </div> -->

      </div>

      <div class="clips" >
        <h3>Videos</h3>
        <div class="clip" v-for="(clip, index) in movie.videos.results.slice(0,3)">
          <div class="imgBox">
            <img :src="'https://img.youtube.com/vi/'+clip.key+'/mqdefault.jpg'">
            <div class="icon">
              <i class="icofont-ui-play"></i>
            </div>
          </div>
            <!-- <div class="link">{{clip.name}}</div> -->
        </div>
      </div>
    </div>


    <div class="column">
      <div class="row">
        <div class="movietitle">
          <span>{{movie.title}}</span>
          <sup>({{movie.release_date.split("-")[0]}})</sup>
        </div>
        <div class="close link" @click="$emit('close', 'register')"> Close <i class="icofont-close-line"></i></div>

      </div>

      <div class="genres">
        <span class="link" v-for="(g, index) in movie.genres">{{g.name}}{{ (index+1 < movie.genres.length) ? ' / ' : '' }}</span>
      </div>


      <div class="info">

        <span class="rating">
          <span class="star">
            <i class="icofont-star" v-for="index in 5" :key="index" :class="{ starFilled: rating>=index }"></i>
          </span>
          {{movie.vote_average*0.5}}<span style="opacity:0.6"> / 5</span>
        </span>

        <span class="label">Director:</span> <span class="link">{{director}}</span>

      </div>


      <div class="cast" v-if="movie.credits.cast.length">
        <div class="thumbs">
          <div class="thumb" v-for="a in movie.credits.cast.slice(0,5)">
            <div class="imgBox">
              <img v-if="a.profile_path" :src="'https://image.tmdb.org/t/p/w154/'+a.profile_path">
              <div v-if="!a.profile_path" class="empty">
                <i class="icofont-user-alt-4"></i>
              </div>
            </div>
            <span class="link">{{a.name}}</span>
          </div>
        </div>
      </div>


      <div class="overview" v-if="movie.overview">
        <h3>Overview</h3>
        <p>{{movie.overview}}</p>
      </div>

      <div class="credit">

        <div v-if="movie.credits.cast.length">
          <span class="label">Cast:</span>

          <span class="link" v-for="(actor, index) in movie.credits.cast.slice(0,num)">{{actor.name}}{{ (index+1 < movie.credits.cast.slice(0,num).length) ? ' / ' : '' }}</span>
          <span class="link more" @click="num = movie.credits.cast.length" v-if="movie.credits.cast.length-num >0">[ +{{movie.credits.cast.length-num}} more ]</span>
          <span class="link more" @click="num = 12" v-if="num > 12">[ less ]</span>

        </div>

        <div v-if="movie.production_companies.length">
          <span class="label">Production:</span>
          <span class="link" v-for="(p, index) in movie.production_companies">{{p.name}}{{ (index+1 < movie.production_companies.length) ? ' / ' : '' }}</span>
        </div>
      </div>









    </div>


    <div v-if="playvideo" class="player">
      <div class="playerOuter">
        <div class="playerInner">
          <iframe :src="trailer" frameborder="0" allowfullscreen autoplay=1 width="560" height="315"></iframe>
        </div>
        <div class="playerClose" @click="closeVideo"><i class="icofont-close-line"></i></div>

      </div>
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
  mounted: function() {
    var image = new Image()
    var that = this
    this.loaded = image.addEventListener('load', function() {
      that.onLoaded()
    })
    image.src = this.src
    // setTimeout(() => this.$refs.bgIMG.style.opacity = 0.5, 10);

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
    director: function() {
      let d = this.movie.credits.crew.filter(x => x.job == 'Director')[0];
      return d.name
    },
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
      if (this.movie.videos.results[0]) {

        return 'http://www.youtube.com/embed/' + this.movie.videos.results[0].key + '?autoplay=1'
      }
    }
  },

  data() {
    return {
      playvideo: false,
      loaded: false,
      src: 'https://image.tmdb.org/t/p/w342/' + this.movie.poster_path,
      trigger: false,
      num: 12
    }
  },
}
</script>

<style scoped>
.container {
  font-family: roboto;
  /* background: #fff; */
  color: rgba(255, 255, 255, 0.8);
}

p {
  line-height: 24px;
}

.columns {
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 0 56px;
  background: #1f2327;
}

.column.left {
  max-width: 342px;
}

.column {
  padding: 24px;
  padding-top:68px;
  flex: 1
}

.row {
  display: flex;
}



/* left */
.poster {
  border-radius: 3px;
  overflow: hidden;
}

.poster {
  position: relative;
}

.poster img {
  border-radius: 3px;
  width: 100%;
  display: block;
}


.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon i {
  color: #fff;
  font-size: 18px;
  width: 15px;
}

.clips{
  margin-top: 48px;
  font-size: 14px;
}
.clip{
  position: relative;
  cursor: pointer;
  margin-bottom:12px;
}
.clips img{
  width: 100%;
  display: block;
}
.clips .imgBox{
  /* margin-bottom: 12px; */
}


/* right */
.genres {
  margin-bottom: 12px;
  font-size: 14px;
}

.details div {
  display: inline-block;
}

.rating {
  margin-right: 24px;
}

.stars {
  display: inline-block;
}

.starFilled {
  color: #ffd15c;
}

.movietitle {
  flex: 1;
  font-size: 48px;
  margin-bottom: 12px;
}

.movietitle span {
  font-weight: 600;
}

.movietitle sup {
  font-size: 18px;
  margin-left: 12px;
}

.close {
  align-self: flex-start;
  white-space: nowrap;
  margin-left: 36px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.close i {
  font-size: 24px;
}

.credit {
  line-height: 22px;
  margin: 48px 0;
  font-size: 14px;
}

.label {
  font-weight: 500;
  margin-right: 8px;
}

.credit>div {
  margin-bottom: 12px;
}

.overview{
  margin:48px 0;
}
.cast {
  margin: 48px 0;
}
.cast .thumbs{
  display: flex;
}
.cast .thumb {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;
  width: 25%;
}

.cast .thumb:not(:last-child) {
  padding-right: 10px;
}
.cast .imgBox{
  position: relative;
  padding-top: 156.3%;
  width: 100%;
  background: #383d42;
  overflow: hidden;
}
.cast img {
  position: absolute;
  width: auto;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cast .empty{
  font-size: 64px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a6169;
}
.cast .link{
  margin-top: 8px;
}
.link.more{
  margin-left: 12px;
  font-size: 12px;
}

.link {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.55);
  transition: color 0.2s ease-out;
}

.link:hover {
  color: rgba(255, 255, 255, 0.95);
}







.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
