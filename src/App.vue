<template>
<div id="app">
    <Sidebar ss-container/>
  <div class="main">

    <!-- <div>
      {{ this.$store.state.list }}
    </div> -->

    <!-- <div class="explore" v-show="!overlay">
        <div class="row">
          <h2>Explore</h2>
          <div class="sort">
            <span class="sort_by">SORT BY</span>
            <div class="dropdown">
              {{sort.title}}
              <ul>
                <li @click="sort=o,discover()" v-for="o in sorting">{{o.title}}</li>
              </ul>
            </div>
            <i class="icofont-caret-down" @click="sortToggle('asc')" v-if="direction=='desc'"></i>
            <i class="icofont-caret-up" @click="sortToggle('desc')" v-if="direction=='asc'"></i>
          </div>
        </div>
        <GridSplit @change="changeID" :arr="movies" :gridShow=gridShow />
        <Pagination :pages="pages" :page="page" />
    </div>

    <Details @close="closeOverlay" v-if="overlay" v-show="overlay" :movie="movie" /> -->
    <!-- <Pagination :pages="pages" :page="page" /> -->

    <!-- <transition name="fade"> -->
      <router-view :key="$route.path" />
    <!-- </transition> -->

  </div>


</div>
</template>




<script>

import Sidebar from './components/sidebar/Sidebar.vue'
import Pagination from './components/Pagination.vue'


export default {
  name: 'app',
  methods: {
    dispatch() {
      this.$store.dispatch('updateFilters', {
        id:this.$route.params.id,
        type:this.$route.params.type,
        with_genres:this.$route.params.genres
      })
      // this.$store.dispatch('discover')
    }
  },
  watch: {
    "$route"() {
      this.dispatch()
    }
  },
  created() {
    this.dispatch()
  },
  components: {
    Sidebar,
    Pagination
  },
}
</script>

<style scoped>

#app{
  display: flex;
  overflow: hidden;
}

.sidebar{
  height: 100vh;
}

.main{
  flex:1;
  padding:40px;
  box-sizing: border-box;
  height: 100vh;
  overflow-y: auto;
}

/* .explore{
  padding:48px;
}
.main {
  flex: 1;
}

.row h2 {
  margin: 0;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.sort {
  font-family: roboto;
}

.dropdown {
  border-radius: 3px;
  border: 1px solid #575c60;
  position: relative;
  line-height: 20px;
  padding: 4px 10px;
  text-transform: capitalize;
  display: inline-block;
  margin-right: 10px;
  width: 68px;
  font-size: 14px;
  user-select: none;
  color: #a3a9ae;
}

.sort_by {
  font-size: 11px;
  margin-right: 8px;
  color: #8a9299;
}

.dropdown ul {
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all 0.24s ease-in-out;
  opacity: 0;
  position: absolute;
  z-index: 10;
  border: 1px solid #575c60;
  top: 100%;
  width: 100%;
  right: -1px;
  background: #292d31;
  border-radius: 0 0 3px 3px;
}


.dropdown:hover ul {
  opacity: 1;
}

.dropdown li {
  padding: 2px 12px;
  cursor: pointer;
}

.dropdown li:hover {
  background: #3ca6b7;
  color: #fff;
}

.sort i {
  cursor: pointer;
  color: #a3a9ae;
}
 */
</style>
