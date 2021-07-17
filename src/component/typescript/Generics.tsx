import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

const Generics: React.FC = () => {
  return (
    <>
      <div>
        <h2>ジェネリクス</h2>
        <p>
          Genericsは抽象的な型引数を使用して、実際に利用されるまで型が確定しないクラス・関数・インターフェイスを実現する為に使用する。
        </p>

        <h3>関数で使用</h3>
        <Highlight className="js">
          {`  function test<T>(arg: T): T {
    return arg;
  }

  test<number>(1); //=> 1
  test<string>("文字列"); //=> 文字列

  //※ Genericsでも型推論ができるので、引数から型が明示的にわかる場合は省略が可能
  test("文字列２"); //=> "文字列２"
`}
        </Highlight>
        <h3>複数の型引数を定義する</h3>
        <Highlight className="js">
          {`  const test = <T, U, P>(arg1: T, arg2: U, arg3: P): P => {
    return arg3;
  }

  //※ Genericsでも型推論ができるので、引数から型が明示的にわかる場合は省略が可能
  test("文字列", true, 4); //=> 4
`}
        </Highlight>
        <h3>型エイリアス</h3>
        <Highlight className="js">
          {`  type KeyValue<T, U> = {
    key: T;
    value: U;
  };

  const obj: KeyValue<string, number> = { key: "文字列", value: 2 };
`}
        </Highlight>
        <h3>型引数に制約を付ける</h3>
        <Highlight className="js">
          {`  type argTypes = {
    name: string;
  }

  const getName = <T extends argTypes>(arg: T): string => {
    return arg.name;
  }

  getName({ name: "name" });
`}
        </Highlight>
      </div>
    </>
  );
};

export default Generics;
