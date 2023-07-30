import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
// import { eachTree } from "../../utils/util";
import { eachTree } from "@/utils/util";
// import { treeObj } from "../../interface/treeDataInterface";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./index.less";

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
  const [visible, setVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  // const [tree, setTree] = useState([]);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const newTreeData = eachTree(treeData);
    console.log("newTreeData", newTreeData);

    // setTree(newTreeData);
  }, []);

  const hide = function () {
    const ele = document.getElementById("drawer");
    ele.classList.add("drawer-hidden");
    setContentVisible(false);
    const handle = function () {
      ele.classList.add("hidden");
      ele.removeEventListener("transitionend", handle);
    };
    ele.addEventListener("transitionend", handle);
  };

  const show = function () {
    const ele = document.getElementById("drawer");
    ele.classList.remove("hidden");
    setTimeout(function () {
      ele.classList.remove("drawer-hidden");
    }, 100);

    const fun = function () {
      setContentVisible(true);
      ele.removeEventListener("transitionend", fun);
    };
    ele.addEventListener("transitionend", fun);
  };

  const handleClick = (e) => {
    setVisible(true);
    show();
  };

  const handleClose = (e) => {
    hide();
    setVisible(false);
    e.stopPropagation();
  };

  console.log(visible);
  return (
    <div className={styles.box}>
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

      <div className={`${styles.cssBox} `} onClick={(e) => handleClick(e)}>
        展开动画
        <div className={`${styles.drawer} hidden drawer-hidden`} id="drawer">
          {contentVisible && (
            <>
              这里面有许多东西
              <CloseOutlined
                onClick={(e) => handleClose(e)}
                className={styles.close}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
