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

export const removeDuplicates = (nums: number[]): number => {
  const result = Array.from(new Set(nums));
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1, NaN);
      }
    }
  }

  const newNums2 = nums.filter((i) => !isNaN(i));

  console.log("result", result);

  console.log("nums", nums);

  return newNums2.length;
};
