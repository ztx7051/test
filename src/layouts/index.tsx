import React from "react";
import { Outlet, useOutletContext } from "umi";
import LeftMenu from "./common/Layouts.js";
import styles from "./index.less";

export default function LayoutPage() {
  const props = useOutletContext();
  console.log("props", props);

  return (
    <div className={styles.navs}>
      <LeftMenu />
      <Outlet />
    </div>
  );
}
