import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Home from "../views/home/index.vue";
import User from "../views/user/index.vue";
import Login from "../views/login/index.vue";
import Layout from "../layout/index.vue";

const staticRouter: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isHide: true,
      title: "登录",
    },
  },

  {
    path: "/layout",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta: {
          isHide: false,
          title: "首页",
        },
      },
      {
        path: "/user",
        name: "user",
        component: User,

        meta: {
          isHide: false,
          title: "用户",
        },
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes: [...staticRouter], //路由列表
});

/**
 * 路由拦截beforeEach
 * to 要去的地址
 * from 从哪里来的
 */
router.beforeEach((to, from, next) => {
  // console.log("to", to);
  // console.log("from", from);
  NProgress.start();
  next();
});

/**
 * 路由跳转错误
 */
router.onError((error) => {
  console.log("路由跳转错误", error);
  NProgress.done();
});
/**
 * 路由跳转结束
 */
router.afterEach(() => {
  NProgress.done();
});
export default router;
