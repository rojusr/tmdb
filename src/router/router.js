import Vue from 'vue';
import VueRouter from 'vue-router';

import List from '@/components/list/List'
import Info from '@/components/info/Info'



Vue.use(VueRouter);
// const parsingId = (route) => ({
//   id: Number(route.params.id)
// })

export default new VueRouter({
  routes: [
    {
      path: '/:type(movies|tv)',
      name: 'explore',
      props: true,
      component: List
    },
    {
      path: '/:type(movies|tv)/:genres(genre=\\d+[,\\d+]*)',
      name: 'explore genres',
      props: true,
      component: List,
    },
    {
      path: '/:type(movies|tv|people)/:id(\\d+)',
      name: 'info',
      component: Info,

      props(route) {
        const props = { ...route.params }
        props.id = +props.id //id to string
        return props
      },
    },

    {
      path: "*",
      props: true,
      redirect: '/movies',
    },
  ],
  mode: 'history',
  base: 'tmdb',

})
