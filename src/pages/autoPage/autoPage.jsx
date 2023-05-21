import React from "react";
import { Row, Col } from "antd";
import yay from "@/assets/yay.jpg";
import styles from "./autoPage.less";

const autoPage = () => {
  const list = Array.from(new Array(12)).map((item, index) => {
    return {
      text: `数字${index}`,
      value: index,
    };
  });

  return (
    <div className={styles.root}>
      <Row>
        {list.map((item) => {
          return (
            <Col key={item.text} className={styles.item}>
              <img src={yay} className={styles.img} />
              <div>{item.text}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default autoPage;
