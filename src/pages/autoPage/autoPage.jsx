import React from "react";
import { Row, Col } from "antd";
import yay from "@/assets/yay.jpg";
import styles from "./autoPage.less";

const autoPage = () => {
  const list = Array.from(new Array(12)).map((item, index) => {
    return {
      text: `数字${index}`,
      value: index,
      title: `杭州市局${index}_`,
    };
  });

  return (
    <div className={styles.root}>
      <Row gutter={[16, 16]}>
        {list.map((item) => {
          return (
            <Col key={item.value} span={4}>
              <div className={styles.item}>
                <img src={yay} className={styles.img} />
                <div className={styles.title}>{item.title}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default autoPage;
