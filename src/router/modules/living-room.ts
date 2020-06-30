/*客厅*/
import {RouteRecordRaw} from "vue-router";

const LIVING_ROOM_ROUTER: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'living-room',
    meta: {
      title: "客厅"
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/living-room/index.vue")
  }
]

export default LIVING_ROOM_ROUTER
