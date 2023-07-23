import React, { useRef } from "react";
// import { Button } from "antd";
// import { history } from "umi";
import styles from "./draggerTest.less";

const Page = () => {
  // const [num, setNum] = useState();
  const divRef = useRef();

  const onMouseDown = (e) => {
    let ev = e || window.event;
    console.log("ev", ev);
    console.log("divRef", divRef);

    const initLeft = ev.clientX - divRef.current.offsetLeft;
    const initTop = ev.clientY - divRef.current.offsetTop;

    document.onmousemove = (e) => {
      divRef.current.style.left = e.clientX - initLeft + "px";
      divRef.current.style.top = e.clientY - initTop + "px";

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  };

  return (
    <div
      className={styles.box}
      id="box"
      ref={divRef}
      onMouseDown={(e) => onMouseDown(e)}
    ></div>
  );
};

export default Page;
