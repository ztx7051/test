import { Button, Menu } from "antd";
import { useState } from "react";
import {
  AppstoreOutlined,
  //   ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { history } from "umi";

import styles from './Layout.less'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("首页", "/home", <PieChartOutlined />),
  getItem("拖拽测试", "/draggerTest", <DesktopOutlined />),
  getItem("测试", "sub2", <AppstoreOutlined />, [
    getItem("类组件测试", "/classComponent"),
    getItem("大数据Select", "/mostData"),
    getItem("自适应布局", "/autoPage"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];
const LeftMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // 点击目录
  const menuItemClick = (item) => {
    console.log("item", item);
    history.push(item.key);
  };
  return (
    <div className={styles.sideMenu}>
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="vertical"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={menuItemClick}
      />
    </div>
  );
};
export default LeftMenu;
