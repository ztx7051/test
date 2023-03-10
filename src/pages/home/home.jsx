import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
// import { eachTree } from "../../utils/util";
import { eachTree } from "@/utils/util";
import { treeObj } from "../../interface/treeDataInterface";

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf2",
            title: "leaf2",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf3",
            title: <b style={{ color: "#08c" }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

const HomePage = () => {
  const [value, setValue] = useState(undefined);
  const [tree, setTree] = useState([]);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const newTreeData = eachTree(treeData);
    console.log("newTreeData", newTreeData);

    setTree(newTreeData);
  }, []);

  return (
    <TreeSelect
      showSearch
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};

export default HomePage;
