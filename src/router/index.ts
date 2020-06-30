import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import LIVING_ROOM_ROUTER from "@/router/modules/living-room"; // 客厅
import BEDROOM_ROUTER from "@/router/modules/bedroom"; // 卧室

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "home" */ "@/views/index.vue"),
    children:[
      ...LIVING_ROOM_ROUTER,
      ...BEDROOM_ROUTER
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
