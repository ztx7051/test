export default {
  routes: [
    { exact: true, path: "/", redirect: "/home" },
    { exact: true, path: "/home", component: "/home" },
    { exact: true, path: "/draggerTest", component: "/draggerTest" },
    {
      path: "/",
      component: "@/layouts/index",
      routes: [
        { path: "/list", component: "list" },
        { path: "/admin", component: "admin" },
      ],
    },
  ],
};
