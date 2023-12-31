import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
    meta: { hidden: true },
  }
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
