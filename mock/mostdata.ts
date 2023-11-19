export default {
  // 支持值为 Object 和 Array
  "GET /api/list": {
    data: [
      { title: 1, name: 1 },
      { title: 2, name: 2 },
      { title: 3, name: 3 },
      { title: 4, name: 4 },
      { title: 5, name: 5 },
      { title: 6, name: 6 },
      { title: 7, name: 7 },
      { title: 8, name: 8 },
      { title: 9, name: 9 },
      { title: 10, name: 10 },
      { title: 11, name: 11 },
      { title: 12, name: 12 },
      { title: 13, name: 13 },
      { title: 14, name: 14 },
      { title: 15, name: 15 },
      { title: 16, name: 16 },
      { title: 17, name: 17 },
      { title: 18, name: 18 },
      { title: 19, name: 19 },
      { title: 20, name: 20 },
    ],
  },

  // GET 可忽略
  "GET /api/listId": (req, res) => {
    setTimeout(() => {
      const data = { status: "成功" };
      res.send(data);
    }, 2000);
  },

  // 支持自定义函数，API 参考 express@4
  "GET /api/listTitle": (req, res) => {
    const nums = Math.random();

    setTimeout(() => {
      if (nums > 0.5) {
        res.send({ title: "同步成功" });
      } else {
        res.send({ title: "同步失败" });
      }
    }, nums * 1000);
  },
};
