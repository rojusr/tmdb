import tmdb from '@/services/API'
const api_key = '?api_key=ec892e3f8fed299ca217c0916e814d39'

// construct string query from Object props
// some props are treated differently
function qs(query) {
  let params=[]
  for (let param of Object.entries(query)){

    if(param[0]!="sort_direction" && param[1]!="" && typeof param[1] !== 'undefined' && param[0]!="type" && param[0]!="id"){

      if(param[0]=='sort_by'){param[1]+="."}
      if(param[0]=='append'){param[0]="append_to_response"}
      if(param[0]=='release_date_gte'){param[1]+="-01-01"}
      if(param[0]=='release_date_lte'){param[1]+="-11-31"}

      let str = param[0] + "=" + param[1]
      params.push(str)
    }
  }

  let str = "&" + params.join("&") + query.sort_direction
  return str
}


export default {
  find (filters) {
    let query = filters.type + '/' + filters.id + api_key + '&append_to_response=credits,videos'
    return tmdb().get(query)
  },
  discover (filters) {
    let query = 'discover/' + filters.type + api_key + qs(filters)
    // console.log(query)
    return tmdb().get(query)
  },

}
