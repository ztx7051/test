import React, { useState } from "react";
import { Button } from "antd";

const Page = () => {
  const [num, setNum] = useState();

  const handleAdd = () => {
    setNum(num + 1);
  };

  return <Button onClick={handleAdd}>{num}</Button>;
};

export default Page;
