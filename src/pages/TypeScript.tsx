import React from "react";
import { title } from "../Class";

// styles
import "../assets/scss/styles.scss";

const TypeScript: React.FC = () => {
  /**
   * 参考
   * https://future-architect.github.io/typescript-guide/
   * https://qiita.com/ringtail003/items/7ccf992f18b768e0e633
   */

  /**
   * 型
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

  /**
   * 関数
   */

  // 引数・戻り値に型を定義する(省略しても可)
  const testFunction = (num: number): string => {
    return `${num.toLocaleString()} 円`;
  };
  // 省略可能な引数は[?]を使う
  const testFunction2 = (x: number, y?: string): string => {
    return `${x.toLocaleString()} ${y}`;
  };

  /**
   * 関数の型宣言
   */

  // ロングハンド
  type funcTypeLongHand = {
    (a: number): number;
  };

  // ショートハンド
  type funcTypeShortHand = (a: number) => number;

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

  /**
   * typeとインターフェースの何が違うのか？
   */

  /**
   * ジェネリクス（総称型）
   */
  function genericFunc<T>(x: T): T {
    return x;
  }

  /**
   * 型アサーション
   */
  interface Foo {
    bar: number;
    bas: string;
  }
  const typeAssertion = {} as Foo;
  typeAssertion.bar = 123;
  typeAssertion.bas = "hello";

  return (
    <>
      <div>
        <h1 className={title.main}>TypeScriptの基礎</h1>
        <section>
          <h2 className={title.sub}>型</h2>
          <h3>真偽値</h3>
          {typeBool && <p>true</p>}

          <h3>数値</h3>
          <p>{typeNum}</p>

          <h3>文字列</h3>
          <p>{typeString}</p>

          <h3>any</h3>
          <p>{typeAny}</p>

          <h3>配列</h3>
          {typeArray.join(" ")}

          <h3>ユニオン（共有）</h3>
          {unionTypeFunc(1)}

          <h2 className={title.sub}>関数</h2>
          <p>{testFunction(1000)}</p>
          <p>{testFunction2(1000, "トルコリラ")}</p>

          <h2 className={title.sub}>ジェネリクス</h2>
          {genericFunc<string>("hoge")}

          <h2 className={title.sub}>型アサーション</h2>
          <p>{typeAssertion.bar}</p>
          <p>{typeAssertion.bas}</p>
        </section>
      </div>
    </>
  );
};

export default TypeScript;
