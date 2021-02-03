<template>
<div class="pagination">
  <span class="current">
    {{page}}
  </span>
  <span class="total">
    /{{pages}}
  </span>

  <div class="list">
    <span class="next" @click="next(-1)" :class="{disabled: (page<=1)}">PREV</span>
    <i class="icofont-thin-double-left" @click="count('start')"></i>
    <i class="icofont-thin-left" @click="count(-10)"></i>
    <ul>
      <li v-for="index in 10" :key="index" :class="{ active: index+counter === page, disabled: (index+counter>pages|| index+counter<1)}" @click="select(index)">
        <span class="hidden" v-if="index+counter<10">1</span>
        <span>{{index+counter}}</span>
        <span class="hidden" v-if="index+counter<100">9</span>
      </li>
    </ul>
    <i class="icofont-thin-right" @click="count(10)"></i>
    <i class="icofont-thin-double-right" @click="count('end')"></i>
    <span class="next" @click="next(1)" :class="{disabled: page>=pages}">NEXT</span>
  </div>


</div>
</template>


<script>
export default {
  name: 'Pagination',
  props: {
    pages: Number,
    page: Number,

  },
  methods: {
    select(index) {
      this.$parent.pageSelect(index + this.counter)
    },
    next(val) {
      let temp = this.page + val - 5
      this.$parent.pageSelect(this.page + val)
      if (temp < 0) {
        temp = 0
      }
      if (temp > this.pages - 10) {
        temp = this.pages - 10
      }
      this.counter = temp
    },
    count(val) {
      let temp;
      if (val == 'start') {
        temp = this.counter = 0
      } else if (val == 'end') {
        temp = this.pages - 10
      } else if (val == 'page') {
        temp = this.page - 1
      } else {
        temp = this.counter + val
      }

      if (temp < 0) {
        temp = 0
      }
      if (temp > this.pages - 10) {
        temp = this.pages - 10
      }
      this.counter = temp

    }
  },
  computed: {
  },
  data() {
    return {
      counter: 0

    }
  },

}
</script>



<style scoped>
.pagination {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
}

.current {
  color: rgba(255, 255, 255, 0.95);
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
}

li {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.list {
  margin-left: 24px;
  display: flex;
  align-items: center;
}

.list i:hover,
li:hover,
.next:hover {
  color: rgba(255, 255, 255, 0.95);
}

.list i {
  cursor: pointer;
  font-size: 24px;
}

.list li span:not(.hidden) {
  /* padding: 2px 4px; */
  margin:4px;
}

.active span:not(.hidden) {
  color: rgba(255, 255, 255, 0.95);
  /* border-radius: 3px; */
  /* border: 1px solid #ffffff47; */
  /* padding: 4px 6px !important; */
}

.disabled {
  color: rgba(255, 255, 255, 0.2);
  pointer-events: none;

}

.hidden {
  opacity: 0;
}

.next {
  cursor: pointer;
  padding: 4px;
  font-size: 12px;
}
</style>
