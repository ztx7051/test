import { useState, useEffect } from "react";
import { Spin } from "antd";
import { getTitleId } from "../../../tablePage/services";
import "yet-another-abortcontroller-polyfill";
import styles from "./index.less";

const CardItem = (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const controller = new AbortController();
  const { signal } = controller;

  const initData = async () => {
    setLoading(true);
    const res = await getTitleId({ signal });

    setTitle(res);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      initData();
    }

    return () => {
      controller.abort();
    };
  }, [id]);
  return (
    <div>
      {loading ? (
        <p className="text">
          识别中<span className={styles.dot}>...</span>
        </p>
      ) : (
        title?.status
      )}
    </div>
  );
};

export default CardItem;
