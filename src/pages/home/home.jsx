import React, { useState, useEffect } from "react";
import { TreeSelect } from "antd";
// import { eachTree } from "../../utils/util";
import { eachTree, removeDuplicates } from "@/utils/util";
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
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

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

  // console.log(visible);

  // const promise = new Promise((resolve, reject) => {
  //   console.log(1);
  //   resolve("success");
  //   console.log(2);
  // });
  // promise.then(() => {
  //   console.log(3);
  // });
  // console.log(4);

  // 1: global.VO = {t}
  let t = 111;
  // 2: fun.[[Scopes]] = [global.VO]
  const fun = () => {
    // 3: fun.AO = {a,b}，并创建一个空的闭包对象fun.Closure = {}
    let a = 1,
      b = 2,
      c = 3;
    // 4: 遇到函数，解析到函数会使用a，所以 fun.Closure={a:1} (实际没这么简单)
    // 5: fun1.[[Scopes]] = [global.VO, fun.Closure]
    function fun1() {
      console.log(a);
    }
    fun1();
    let obj = {
      // 6: 遇到函数，解析到函数会使用b，所以 fun.Closure={a:1,b:2}
      // 7: method.[[Scopes]] = [global.VO, fun.Closure]
      method() {
        console.log(b);
      },
    };
  };

  const obj = {};
  obj.fun = fun;

  // 执行到这里时，预编译 fun
  fun();
  console.log("obj", obj);

  function maxProfit(prices) {
    let min = 0;
    let max = 0;
    let index = 1;
    const maxprofit = [];

    while (index !== prices.length) {
      if (prices[index] < prices[min]) {
        min = index;
        max = index;
      }

      if (prices[index] > prices[max]) {
        max = index;
        maxprofit.push(prices[max] - prices[min]);
      }
      ++index;
    }

    maxprofit.sort(function (a, b) {
      return b - a;
    });
    console.log("maxprofit", maxprofit);

    if (max === min) {
      return maxprofit[0] || 0;
    } else {
      return prices[max] - prices[min];
    }
  }

  maxProfit([3, 2, 6, 5, 0, 3]);

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

      <div>视频</div>
      <video
      // src="https://webstatic.mihoyo.com/upload/op-public/2023/02/23/5e355dea3eaf1f31ea497d5703b0c505_2947932349865370574.mp4"
      // playsinline
      // x5-video-player-type="h5"
      // autoPlay="autoplay"
      // playsInline="playsinline"
      // // playsInline
      // loop="loop"
      // preload="auto"
      // muted
      // className={styles.video}
      ></video>
    </div>
  );
};

export default HomePage;
