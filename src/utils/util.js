// 遍历树
export const eachTree = (data) => {
  if (!data?.length) return [];

  data.forEach((item) => {
    if (item.children && item.children.length) {
      item.selectable = false;
      eachTree(item.children);
    }
  });

  return data;
};

//  生成树
export const getTreeData = (arr) => {
  return arr;
};
