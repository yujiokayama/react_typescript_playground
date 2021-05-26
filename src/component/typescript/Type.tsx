import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

const Type: React.FC = () => {
  /**
   * 基本の型
   */
  const typeBool: boolean = true;
  const typeNum: number = 0;
  const typeString: string = "text";
  const typeAny: any = "なんでも";
  const typeArray: string[] = ["text1", "text2"];

  /**
   * ユニオン
   */

  // 関数の戻り値で使用
  const unionTypeFunc = (x: number): number | string => {
    if (x === 0) {
      return 0;
    } else {
      return "error";
    }
  };

  /**
   * タプル
   */
  let typeTuple: [number, string] = [1, "hello"];
  typeTuple[0].toFixed();
  typeTuple[1].charAt(0);

  return (
    <>
      <div>
        <h2>型</h2>
        <Highlight className="js">
          {`  /**
   * 基本の型
   */
  const typeBool: boolean = true;
  const typeNum: number = 0;
  const typeString: string = "text";
  const typeAny: any = "なんでも";
  const typeArray: string[] = ["text1", "text2"];

  /**
   * ユニオン
   */

  // 関数の戻り値で使用
  const unionTypeFunc = (x: number): number | string => {
    if (x === 0) {
      return 0;
    } else {
      return "error";
    }
  };

  /**
   * タプル
   */
  let typeTuple: [number, string] = [1, "hello"];
  typeTuple[0].toFixed();
  typeTuple[1].charAt(0);
`}
        </Highlight>
      </div>
    </>
  );
};

export default Type;
