import service from '@/services/service'

export default {

  updateFilters({ commit }, filters) {
    let arr=[]
    if(filters.with_genres){
      arr = filters.with_genres.split('=')[1].split(',')
      filters.with_genres = arr.filter(function(e){ return e === 0 || e }).toString()
    }
    commit('updateFilters', filters)
  },

  find({ commit, state }) {
    // fetch if request is not the same as old
    let isSame = true
    if (Object.keys(state.object).length === 0) {
      isSame = false
    } else {
      for (let key in state.filters) {
        if (state.object_filters[key] != state.filters[key]) {
          isSame = false
          break
        }
      }
    }
    if (!isSame) {
      state.isLoading=true
      service.find(state.filters).then(res => {
        state.isLoading=false
        commit('setObject', res.data)
      })
    }
  },

  discover({ commit, state }) {
    // fetch if request is not the same as old
    let isSame = true
    if (Object.keys(state.list).length === 0) {
      isSame = false
    } else {
      for (let key in state.filters) {
        let a = state.list_filters[key]
        let b = state.filters[key]

        if(a!==b){
          // console.log('key: '+key+'\n'+a+" != "+b)
          isSame = false
          break
        }
      }
    }
    if (!isSame) {
      // console.log("not the same")
      state.isLoading=true
      service.discover(state.filters).then(res => {
        state.isLoading=false
        commit('setList', res.data.results)
      })
    }

  },

  getMovies() {

  },
  getShows() {

  },


}
