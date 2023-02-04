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
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
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
    history.push(item.key);;
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
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
