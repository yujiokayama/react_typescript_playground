import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

const Function: React.FC = () => {
  /**
   * 関数の型宣言
   */

  // ロングハンド
  type funcTypeLongHand = {
    (a: number): number;
  };

  // ショートハンド
  type funcTypeShortHand = (a: number) => number;

  const funcTypeShortHandTest: funcTypeShortHand = (num) => {
    return num;
  };

  return (
    <>
      <div>
        <h2>関数</h2>

        <h3>関数の型宣言</h3>
        <Highlight className="js">
          {`  // ロングハンド
  type funcTypeLongHand = {
    (a: number): number;
  };

  // ショートハンド
  type funcTypeShortHand = (a: number) => number;

  const funcTypeShortHandTest: funcTypeShortHand = (num) => {
    return num;
  };
`}
        </Highlight>
      </div>
    </>
  );
};

export default Function;
