import React, { useRef, useState } from "react";
import { Select } from "antd";
import styles from "./mostData.less";

const { Option } = Select;

const MostDataPage = () => {
  const bigDataBoxRef = useRef();
  const itemSize = 20;
  const screenHeight = 240;
  const visibleCount = Math.ceil(screenHeight / itemSize);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + visibleCount);
  const [startOffset, setStartOffset] = useState(0);
  const list = Array.from(new Array(100000)).map((item, index) => {
    return {
      text: `数字${index}`,
      value: index,
    };
  });
  const listHeight = list.length * itemSize;
  const [visibleData, setVisibleData] = useState(
    list.slice(startIndex, endIndex)
  );

  const handleScroll = () => {
    let scrollTop = bigDataBoxRef.current.scrollTop;
    let start = Math.floor(scrollTop / itemSize);
    //此时的结束索引
    let end = start + visibleCount;
    //此时的偏移量
    let startOffset = scrollTop - (scrollTop % itemSize);
    setStartIndex(start);
    setEndIndex(end);
    setStartOffset(startOffset);
    setVisibleData(list.slice(start, end));
  };

  return (
    <div className={styles.box}>
      <Select
        // virtual={false}
        className={styles.selectClass}
        placeholder="请选择其中一个"
        // open
        showSearch
        filterOption={(input, option) =>
          (option?.key ?? "").toLowerCase().includes(input.toLowerCase())
        }
      >
        {list.map((item) => {
          return (
            <Option key={item.text} value={item.value}>
              {item.text}
            </Option>
          );
        })}
      </Select>
      <div
        ref={bigDataBoxRef}
        id="bigDataBox"
        className={styles.bigDataBox}
        onScroll={handleScroll}
      >
        <div
          style={{ height: listHeight + "px" }}
          className={styles.scrollBar}
        />
        <div
          className={styles.content}
          style={{ transform: `translate3d(0,${startOffset}px,0)` }}
        >
          {visibleData.map((item) => {
            return (
              <div
                key={item.text}
                className={styles.listItem}
                style={{ height: itemSize + "px", lineHeight: itemSize + "px" }}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MostDataPage;
