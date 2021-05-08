import React, { useEffect, useState, useRef } from "react";

const ToggleButton = () => {
  return (
    <div>
      <span>表示切り替えで表示されるコンテンツ</span>
    </div>
  );
};

const Conditions: React.FC = () => {
  /**
   * UseStateによるステートの管理
   */
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => setDisplay(!display);

  return (
    <>
      <div>{display && <ToggleButton />}</div>
      <button onClick={handleDisplay}>表示切り替え</button>
    </>
  );
};

export default Conditions;
