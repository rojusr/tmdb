<template>
  <div @click="toggleActive()" class="genre" :class="{ selected: isActive}">
    <span>{{genre.name}}</span>
    <!-- <i class="icofont-check-alt"></i> -->
  </div>
</template>


<script>
export default {
  name: 'FilterItem',
  props: {
    genre: Object,
    allGenres:Boolean
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleActive() {
      this.$parent.allGenres=false
      this.isActive = !this.isActive
      this.$parent.toggle(this.genre.id)
    }
  },
  watch:{
    allGenres:function(newval,oldval){
      if(newval){
        this.isActive=false
      }
    }
  }
}
</script>



<style scoped>

.genre {
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

.genre span {
  transition: transform 0.24s ease-out;
  display: inline-block;
  pointer-events: none;
  flex: 1;
  margin-right: 20px;
}

.genre:hover {
  background-color: #2f3c48;
  color: rgba(255, 255, 255, 0.85);
}

.genre:hover span {
  transform: translateX(4px);
}
.genre::before{
  content:'';
  width:4px;
  height: 100%;
  position: absolute;
  left: 0;
  transition: all 0.24s ease-out;
  transform: scalex(0);
  transform-origin: left;
}

.genre:hover::before{
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
i {
  opacity: 0;
  transition: all 0.15s;
  transform: translatey(-5px);
}

.selected i {
  opacity: 1;
  transform: translatey(0px);
}
</style>
