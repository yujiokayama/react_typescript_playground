import React, { useRef, useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Input from "@material-ui/core/Input";

const UseRef: React.FC = () => {
  const SampleUseRef = () => {
    const inputEl = useRef<HTMLInputElement | null>(null);
    const [text, setText] = useState<string | null>("");
    const handleSetText = () => {
      if (inputEl.current) setText(inputEl.current.value);
    };
    return (
      <>
        <Input ref={inputEl} type="text" />
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={handleSetText}>set text</Button>
        </ButtonGroup>
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
