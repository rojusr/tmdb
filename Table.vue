<template>
  <div class="component">

    <table>
      <thead>
        <tr>
          <th>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
</th>
          <th @click="sort(key)" v-for="(key,index) in keys" :key="index">{{key}}</th><th style="text-align:center">...</th>
        </tr>
      </thead>

      <tbody>
        <tr class="row" v-for="(item,index) in sortedItems" :key="index">
          <td>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          </td>

          <td v-for="key in keys" :class="{ 'title' : key == 'title'}">
            <router-link v-if="key == 'title'" :to="{name:'posts', params: {type: 'posts'}}">{{item[key]}}</router-link>
            <span v-if="key !== 'title'">{{item[key]}}</span>
          </td>
          <td style="text-align:center"><span @click="edit(item.id)">Edit</span> <span @click="select(item,'delete')">Delete</span></td>
        </tr>
      </tbody>

    </table>
    <p>
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
    </p>
    <!-- debug: currentSort={{currentSort}}, dir={{currentSortDir}} -->
    <p>page {{currentPage}} of {{totalPages}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      currentSort:'title',
      currentSortDir:'asc',
      pageSize:5,
      currentPage:1,
      keys:['title','date','status']
    }
  },
  props:{
    param:String,
    entries:Array
  },

  methods:{
    edit(id){
      if(this.param=="page"){
        this.$router.push({ name: 'pageCreate', query: { id: id } })
      }else{

      }
    },
    select(item,action){
      console.log(item.id,action)
    },
    sort:function(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.entries.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    }
  },
  computed:{

    sortedItems:function() {
      return this.entries.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    },
    totalPages:function(){
      return Math.ceil(this.entries.length/this.pageSize)
    }
  }
}
</script>

<style scoped lang="sass">


table
  border-collapse: collapse
  width: 100%

thead
  text-transform: uppercase
  font-size: 12px

th,td
  text-align: left
  padding: 10px
  padding-right: 24px

th
  cursor: pointer


tbody tr
  transition: 0.2s ease-out
  border-top: 1px solid #ccc
  border-bottom: 1px solid #ccc

  &:hover
    background: #e4e4e4



.title
  font-weight: 600


th,td
  &:first-child
    width: 20px
</style>
