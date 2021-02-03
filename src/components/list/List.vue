<template>
<div class="List">

  <!-- <div class="item" v-for="movie in arr" v-on:click="clicked(movie)">
    <GridItem @click.native="clicked(movie)" v-show="gridShow" :key="movie.poster_path+1" :movie="movie" />
  </div> -->

  <!-- <div class="item" @click="click(index)" v-for="(item, index) in list" :key="index">
    <div class="title">
      <h3 v-if="type=='movies'">{{item.title}}</h3>
      <h3 v-if="type=='tv'">{{item.name}}</h3>
    </div>
  </div> -->

  <div class="item" @click="click(item)" v-for="(item,index) in list"  :key="index">
    <Item :object="item" />
  </div>

</div>
</template>


<script>
import Item from './Item.vue'

export default {
  name: 'List',
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  props: {
    type:String,
    genres:String,
    filter:String
  },
  methods: {
    click(item) {
      this.$router.push({
        name: "info",
        params: {
          type: this.type,
          id: item.id
        }
      })
    }
  },
  created(){
    this.$store.dispatch('discover')
  },
  components:{
    Item
  }
}
</script>

<style>
.list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.item {
  max-width: 342px;
  width: 20%;
  margin-bottom: 12px;
  display: inline-block;
  cursor: pointer;
}

/* .grid {
  margin-bottom: 24px;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

*/
@media (max-width: 1500px) {
  .item {
    width: 25%;
  }
}

@media (max-width: 1200px) {
  .item {
    width: calc(100% / 3);
  }
}

@media (max-width: 800px) {
  .item {
    width: 50%;
  }
}
@media (max-width: 600px) {
  .item {
    width: 100%;
  }
}


</style>
