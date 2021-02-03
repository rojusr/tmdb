<template>
<div class="overlay">


  <div class="background">

    <div class="imgBox">
        <subImage :src="backdrop"/>
    </div>
    <div class="gradient"></div>

  </div>

  <div class="section intro">

    <div class="container">

      <!-- <div class="row play">
        <div class="icon">
          <i class="icofont-ui-play"></i>
        </div>
      </div> -->


      <div class="columns">

        <div class="column movie_poster" v-show="movie.poster_path">
          <div class="poster">
            <div class="imgBox">
              <subImage :src="poster"/>
            </div>
          </div>
        </div>

        <div class="column movie_info">
          <div>
            <div class="row">
              <div class="movie_title">
                <h1>
                  {{movie.title}}
                  <sup>({{movie.release_date.split("-")[0]}})</sup>

                </h1>
              </div>
              <!-- <router-link to="/movies"> -->
                <div class="close link"  @click="$router.go(-1)"> Close <i class="icofont-close-line"></i></div>
              <!-- </router-link> -->
            </div>
            <h2 class="movie_tagline" v-show="movie.tagline">{{movie.tagline}}</h2>
          </div>

          <div class="genres">
            <span v-for="(g, index) in movie.genres"><span class="link">{{g.name}}</span>{{ (index+1 < movie.genres.length) ? ' / ' : '' }}</span>
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
                <div class="thumb-inner">
                  <div class="imgBox">

                    <div v-if="!a.profile_path" class="empty">
                      <i class="icofont-user-alt-4"></i>
                    </div>
                    <subImage :src="'https://image.tmdb.org/t/p/w154/'+a.profile_path" />
                  </div>

                  <span class="link">{{a.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <div class="section details">
    <div class="container">
      <div class="overview" v-if="movie.overview">
        <h3>Overview</h3>
        <p>{{movie.overview}}</p>
      </div>

      <div class="credit">
        <div v-if="movie.credits.cast.length">
          <span class="label">Full cast:</span>
          <span class="" v-for="(actor, index) in movie.credits.cast.slice(0,num)"> <span class="link">{{actor.name}}</span>{{ (index+1 < movie.credits.cast.slice(0,num).length) ? ' / ' : '' }}</span>
          <span class="link more" @click="num = movie.credits.cast.length" v-if="movie.credits.cast.length-num >0">[ +{{movie.credits.cast.length-num}} more ]</span>
          <span class="link more" @click="num = 12" v-if="num > 12">[ less ]</span>
        </div>
        <div v-if="movie.production_companies.length">
          <span class="label">Production:</span>
          <span v-for="(p, index) in movie.production_companies.slice(0,3)">
            <span class="link">{{p.name}}</span>{{ (index+1 < 3) ? ' / ' : '' }}</span>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import subImage from '../_sub/subImage.vue'

export default {
  name: 'Movie',
  data(){
    return {
      num: 12,
    }
  },
  props: {

  },
  computed:{
    movie(){
      return this.$store.state.object
    },
    poster(){
      return 'https://image.tmdb.org/t/p/w342/' + this.movie.poster_path
    },
    backdrop(){
      return 'https://image.tmdb.org/t/p/original/' + this.movie.backdrop_path
    },
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


    // timeConvert: function() {
    //   let num = this.movie.runtime;
    //   let hours = (num / 60);
    //   let rhours = Math.floor(hours);
    //   let minutes = (hours - rhours) * 60;
    //   let rminutes = Math.round(minutes);
    //   return rhours + "h " + rminutes + "min";
    // },

    // trailer: function() {
    //   if (this.movie.videos.results[0]) {
    //     return 'http://www.youtube.com/embed/' + this.movie.videos.results[0].key + '?autoplay=1'
    //   }
    // }
  },
  components: {
    subImage,
  },
}
</script>

<style scoped>
.main {
  color: rgba(255, 255, 255, 0.8);
}

h1 {
  display: inline-block;
}

h2 {
  margin-bottom: 48px;
}

p {
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
}

.row {
  display: flex;
}
.poster .imgBox, .thumb .imgBox{
  padding-top: 156.3%;
  width:100%;
  position: relative;
  overflow: hidden;
}
img{
  width: 100%;
  height:100%;
  position: absolute;
  object-fit: cover;
  top: 0;
}

.section.intro {
  /* overflow: hidden; */
  position: relative;
}

.section.intro .columns {
  display: flex;
}

.column.movie_poster {
  max-width: 240px;
  margin-right: 48px;
  width:100%;
}

.column.movie_info {
  flex: 1;
}

.section.intro{
  margin-top: 240px;
}


.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
}

.background .imgBox {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  opacity: 0.5;
  /* filter: saturate(0); */

}

.gradient {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, #0e1923 95%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}


.row.play {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0;
}

.icon {
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



.clips {
  margin-top: 48px;
  font-size: 14px;
}

.clip {
  position: relative;
  cursor: pointer;
  margin-bottom: 12px;
}


.genres {
  margin-bottom: 12px;
  /* font-size: 14px; */
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

.movie_title {
  flex: 1;
  font-size: 48px;
  color: #fff;
}

.movie_title span {
  font-weight: 600;
}

.movie_title sup {
  font-size: 18px;
  margin-left: 12px;
}

.movie_tagline {
  color: #fff;
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

.overview {
  margin: 48px 0;
}

.cast {
  margin-top: 24px;
}

.cast .thumbs {
  display: flex;
}

.cast .thumb {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  align-items: center;
  width: 20%;
  max-width: 72px;
  position: relative;
  cursor:pointer;
}
.thumb-inner{
  width:100%;
  position: relative;
}

.cast .thumb:not(:last-child) {
  padding-right: 10px;
}
.cast .imgBox {
  background: #383d42;
}


.cast .empty {
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

.cast .link {
  position: absolute;
  white-space: nowrap;
  left:50%;
  transform: translate(-50%,0px);
  opacity: 0;
  transition: all 0.2s ease-out;
  color:#fff;
}
.thumb:hover .link{
  opacity:1;
  transform: translate(-50%,4px);
}
.link.more {
  margin-left: 12px;
  font-size: 12px;
  white-space: nowrap;
}

.link {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease-out;
}

.link:hover {
  color: rgba(255, 255, 255, 0.95);
  text-decoration: underline;
}













/* .background2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
}

.background2 .imgBox {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0
} */













</style>
