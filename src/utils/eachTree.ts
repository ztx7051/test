import { treeObj } from "../interface/treeDataInterface";

// 遍历树
export const eachTree = (data: Array<treeObj>) => {
  if (!data?.length) return [];

  data.forEach((item) => {
    if (item.children && item.children.length) {
      item.selectable = false;
      eachTree(item.children);
    }
  });

  return data;
};
