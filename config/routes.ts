export default [
  {
    exact: true,
    path: "/jj",
    redirect: "@/pages/home",
  },
  { exact: true, path: "/home", component: "@/pages/home" },
  { exact: true, path: "/draggerTest", component: "@/pages/draggerTest" },
  { exact: true, path: "/classComponent", component: "@/pages/classComponent" },
  { exact: true, path: "/mostData", component: "@/pages/mostData" },
  { exact: true, path: "/autoPage", component: "@/pages/autoPage" },
  { exact: true, path: "/tablePage", component: "@/pages/tablePage" },
  { exact: true, path: "/tablePageThree", component: "@/pages/tablePageThree" },
  // {
  //   path: "/",
  //   component: "@/layouts/index",
  //   routes: [

  //   ],
  // },
];
