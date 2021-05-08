import React, { useEffect } from "react";

const LifeCycle: React.FC = () => {
  // return文の前がcreatedにあたる
  console.log("is created!!");
  useEffect(() => {
    // マウント後に実行したい処理
    console.log("is mounted!!");
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default LifeCycle;
