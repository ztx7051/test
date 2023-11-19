import { useState, useEffect } from "react";
import { getTitle } from "../../services";
import styles from "./index.less";
import "yet-another-abortcontroller-polyfill";
import { Button } from "antd";

const CardTitle = (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const controller = new AbortController();
  const { signal } = controller;

  const initData = async () => {
    setLoading(true);
    const res = await getTitle({ signal });

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
          同步中<span className={styles.dot}>...</span>
        </p>
      ) : (
        title?.title
      )}

      {/* <Button onClick={() => cancel("取消请求啊")}>取消请求</Button> */}
      <Button onClick={() => controller.abort()}>取消请求</Button>
    </div>
  );
};

export default CardTitle;
