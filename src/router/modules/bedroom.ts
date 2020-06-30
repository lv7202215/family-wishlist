/*卧室*/
import {RouteRecordRaw} from "vue-router";

const BEDROOM_ROUTER: Array<RouteRecordRaw> = [
  {
    path: '/bedrooms',
    name: 'Bedrooms',
    meta: {
      title: "卧室"
    },
    component: () => import(/* webpackChunkName: "about" */ "@/views/bedroom/index.vue"),
    children: [
      {
        path: '/master-bedroom',
        name: 'MasterBedroom',
        meta: {
          title: "主卧"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/bedroom/rooms/master-bedroom.vue"),
      },
      {
        path: '/second-bedroom',
        name: 'SecondBedroom',
        meta: {
          title: "次卧"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/bedroom/rooms/second-bedroom.vue"),
      },
      {
        path: '/guestroom',
        name: 'Guestroom',
        meta: {
          title: "客房"
        },
        component: () => import(/* webpackChunkName: "about" */ "@/views/bedroom/rooms/guestroom.vue"),
      }
    ]
  }
]

export default BEDROOM_ROUTER
