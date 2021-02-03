export default{

  updateFilters(state,filters){
    for(let key in filters){
      let value = filters[key]
      if(value=='movies'){value='movie'}
      if(value=='people'){value='person'}
      state.filters[key]=value
    }
  },
  setObject(state, data){
    state.object = data
    for(let key in state.filters){
      state.object_filters[key]=state.filters[key]
    }
  },
  setList(state, data){
    state.list = data
    for(let key in state.filters){
      state.list_filters[key]=state.filters[key]
    }
  }

}
