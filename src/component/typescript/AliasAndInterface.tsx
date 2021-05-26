import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

const AliasAndInterface: React.FC = () => {
  /**
   * type(型エイリアス)
   * 型や型の組み合わせに別名を付ける
   */

  // 配列内のオブジェクトに許容する型をつける
  type TypeObjInArr = {
    id: number;
    name: string;
  };

  /**
   * インターフェース
   */
  interface TypeObjInArr2 {
    id: number;
    name: string;
  }

  return (
    <>
      <div>
        <h2>Type（型エイリアス）/ interface</h2>
        <Highlight className="js">
          {`  /**
   * type(型エイリアス)
   * 型や型の組み合わせに別名を付ける
   */

  // 配列内のオブジェクトに許容する型をつける
  type TypeObjInArr = {
    id: number;
    name: string;
  };

  /**
   * インターフェース
   */
  interface TypeObjInArr2 {
    id: number;
    name: string;
  }
`}
        </Highlight>
      </div>
    </>
  );
};

export default AliasAndInterface;
