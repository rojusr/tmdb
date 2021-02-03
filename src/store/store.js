import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import data from '../sample_data/data.json'
import genres from '../sample_data/genres.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    list:data,
    list_filters:{},
    object:{},
    object_filters:{},
    pages:'',
    genres: genres,
    isLoading:true,
    filters:{
      type:"movie",
      id:'',
      with_genres:[],
      append:["credits","videos"],
      release_date_gte:'',
      release_date_lte:'',
      page:1,
      sort_by:"popularity",
      sort_direction:'desc'
    }
  },
  getters,
  mutations,
  actions
});
