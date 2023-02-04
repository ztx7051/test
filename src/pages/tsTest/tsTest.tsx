import React from "react";

interface obj {
  readonly name: string;
}
const teTest = () => {
  const name: obj = { name: "周天旭" };

  name.name = "dd";

  return <div></div>;
};

export default teTest;
