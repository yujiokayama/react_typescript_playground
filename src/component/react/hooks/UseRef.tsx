import React, { useRef, useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

const UseRef: React.FC = () => {
  const SampleUseRef = () => {
    const inputEl = useRef<HTMLInputElement | null>(null);
    const [text, setText] = useState<string | null>("");
    const handleSetText = () => {
      if (inputEl.current) setText(inputEl.current.value);
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={handleSetText}>set text</button>
        <p>テキスト : {text}</p>
      </>
    );
  };
  return (
    <>
      <h3>useRef</h3>
      <p>
        DOM要素への参照ができる
        <br />
        useRefでは、useStateのようにコンポーネント内での値を保持することが出来る。
      </p>

      <h4>構文</h4>
      <Highlight className="js">
        {`  const SampleUseRef = () => {
    const inputEl = useRef<HTMLInputElement | null>(null);
    const [text, setText] = useState<string | null>("");
    const handleSetText = () => {
      if (inputEl.current) setText(inputEl.current.value);
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={handleSetText}>set text</button>
        <p>テキスト : {text}</p>
      </>
    );
  };
`}
      </Highlight>
      {SampleUseRef()}
    </>
  );
};

export default UseRef;
