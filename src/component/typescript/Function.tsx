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

  /**
   * 省略可能な引数
   */

  // 引数の後に[?]をつける
  function optionalArgs(arg1: number, arg2?: string) {
    return arg1;
  }

  // arg2がなくても怒られない
  optionalArgs(0);

  /**
   * 可変長引数
   */

  function variableLengthArgs(...words: string[]): string {
    return "Hello, " + words.join("");
  }

  variableLengthArgs("今日は", "いい天気");

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
        <h3>省略可能な引数</h3>
        <Highlight className="js">
          {`  // 引数の後に[?]をつける
  function optionalArgs(arg1: number, arg2?: string) {
    return arg1;
  }

  // arg2がなくても怒られない
  optionalArgs(0);
`}
        </Highlight>
        <h3>可変長引数</h3>
        <Highlight className="js">
          {`  function variableLengthArgs(...words: string[]): string {
    return "Hello, " + words.join("");
  }

  variableLengthArgs("今日は", "いい天気");
`}
        </Highlight>
      </div>
    </>
  );
};

export default Function;
