<template>
<div class="filters">
  <div class="filter">
    <div class="category">Release Date</div>
    <div class="date">
      <vue-slider v-model="range" v-bind="options" @drag-end="dragend" />
      <div class="dateValues">
        <span>{{range[0]}}</span>
        <span style="float:right">{{range[1]}}</span>
      </div>
    </div>
    <div class="category">Genres</div>
    <div class="genre_reset" @click="reset()" :class="{ selected: allGenres}">
      <span class="reset">All</span>
    </div>
    <FilterItem ref="item" v-for="(genre, index) in genres" @click="toggleActive()" :key="index" :allGenres="allGenres" :genre="genre" />
  </div>

</div>
</template>


<script>
import FilterItem from './FilterItem.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

import genres from '../../sample_data/genres.json'

export default {
  name: 'Filters',
  data() {
    return {
      allGenres:true,
      genres,
      selection: [],
      range:[1970,2020],
      options: {
        dotSize: 14,
        width: 'auto',
        height: 4,
        contained: true,
        min: 1970,
        max: 2020,
        interval: 1,
        clickable: false,
        tooltip:'none',
        minRange: 1,
      }
    }
  },

  computed:{

  },
  methods: {
    reset() {
      this.allGenres=true
      this.selection.length = 0
      this.select()
    },
    dragend(){
      // this.$parent.range = this.range
      // this.$parent.discover()
    },
    toggle(val) {
      let arr = this.selection;
      var idx = arr.indexOf(val);
      if (idx >= 0) {
        arr.splice(idx, 1);
      } else {
        arr.push(val);
      }
      this.select()
    },
    select() {
      if(this.selection.length>0){
        this.allGenres=false
        this.$router.push({ name: "explore genres", params: {
            type:this.$route.params.type,
            genres: 'genre='+this.selection
          }
        })
      }else{
        this.allGenres=true
        this.$router.push({ name: "explore", params: {
            type:this.$route.params.type
          }
        })
      }
      // this.$parent.genreSelect(this.selection.toString())
      // console.log('genre='+this.selection)
      // console.log(this.$route.params.type,)

    }
  },
  components: {
    FilterItem,
    VueSlider
  },

}
</script>



<style scoped>
.filters {
  /* background: #32383e; */
  font-size: 14px;
  font-family: roboto;
  padding-top: 48px;
}
.date{
  padding: 0 20px;
  margin-bottom: 48px;
  color:rgba(255, 255, 255, 0.5);
}
.dateValues{
  margin-top: 8px;
}


.category {
  color: rgba(255, 255, 255, 0.55);
  padding: 0 60px 0 20px;
  margin-bottom: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
}

.genre_reset {
  padding: 0 20px;
  transition: background 0.2s;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.55);
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  line-height: 24px;
  margin-bottom: 2px;
}

.genre_reset span {
  transition: transform 0.2s ease-out;
  display: inline-block;
  pointer-events: none;
  flex: 1;
  margin-right: 20px;
}

.genre_reset:hover {
  background-color: #2f3c48;
  color: rgba(255, 255, 255, 0.95);
}

.genre_reset:hover span {
  transform: translateX(4px);
}
.genre_reset::before{
  content:'';
  width:4px;
  height: 100%;
  position: absolute;
  left: 0;
  transition: all 0.24s ease-out;
  transform: scalex(0);
  transform-origin: left;
}

.genre_reset:hover::before{
  background-color: #2f5b84;
  transform: scalex(1);

}
.selected::before{
  background-color: #03a9f4;
  transform: scalex(1);

}
.selected:hover::before{
  background-color: #b8e9ff;
}
.selected{
  color: rgba(255, 255, 255, 0.75);
}
</style>
