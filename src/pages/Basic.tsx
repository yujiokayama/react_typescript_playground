import React, { useState, useRef } from "react";
import Highlight from "react-highlight";
import classNames from "classnames";
import { title, btn, input, section } from "../Class";
import "highlight.js/styles/agate.css";

// Todo
import TaskList from "../component/todo/TaskList";
import TaskInput from "../component/todo/TaskInput";

import Header from "../component/Header";
import Child from "../component/basic/Child";
import Slot from "../component/basic/Slot";

const Basic: React.FC = () => {
  // コンポーネントの作成
  const SampleComponent = () => {
    return (
      <div>
        <p>This is a component.</p>
      </div>
    );
  };

  // テンプレート構文
  const SampleTemplate = () => {
    const name: string = "react";
    const link: string = "#";
    type TypeItems = {
      key: number;
      title: string;
    };
    const items: TypeItems[] = [
      {
        key: 1,
        title: "xxx",
      },
    ];
    const isActive: boolean = true;
    const isShow: boolean = false;
    return (
      <div>
        {/* 変数展開 */}
        <p>Hello, {name} !</p>
        {/* データバインド */}
        <a href={link}>ダミーリンク</a>
        {/* 繰り返し処理 */}
        <ul>
          {items.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ul>
        {/* 条件つきレンダリング */}
        {isActive && <p>Paragraph</p>}
        <p style={{ display: isShow ? "initial" : "none" }}>Second paragraph</p>
      </div>
    );
  };

  /**
   * class
   */
  const SampleClass = () => {
    // オブジェクト
    const isPrimary = true;
    const buttonClassObject = classNames({
      btn: true,
      "btn-primary": isPrimary,
    });
    // 配列
    const buttonClassArray = classNames(["btn-primary", { btn: true }]);
    return (
      <div>
        <button className={buttonClassObject}>button</button>
        <button className={buttonClassArray}>button</button>
      </div>
    );
  };

  /**
   * html
   */
  const SampleHtml = () => {
    const htmlString: string = `<div>this is html render</div>`;
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  /**
   * イベント
   */
  const SampleEvent = () => {
    // クリックイベント
    const handleClick = () => {
      alert("on click");
    };
    // useState
    const [name, setName] = useState("");
    // インプットイベント（イベントにtypeを指定する）
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
    return (
      <div>
        <h3>input event</h3>
        <input
          id=""
          className={input.text}
          type="text"
          name=""
          onChange={handleInput}
        />
        双方向データバインディング：{name}
        <h3>click event</h3>
        <div>
          <button onClick={handleClick} className={btn.blue}>
            Click me
          </button>
        </div>
      </div>
    );
  };

  /**
   * ref(DOM要素にアクセス)
   */
  const refTarget = useRef<HTMLParagraphElement>(null);
  const sampleRef = () => {
    const handleClick = () => {
      console.log(refTarget.current);
    };
    return (
      <>
        <p ref={refTarget}>この要素を参照します。</p>
        <button onClick={handleClick} className={btn.blue}>
          Click me
        </button>
        <p>※コンソールで確認</p>
      </>
    );
  };

  /**
   * コンポーネント間のイベント通知
   */
  const [stateProp, setStateProp] = useState<string>("");
  const updateState = (): void => {
    setStateProp("更新した");
  };

  /**
   * コンポーネントの差し込み
   */
  const SampleSlotHeader = () => {
    return <div>header</div>;
  };
  const SampleSlotBody = () => {
    return <div>body</div>;
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-10">
        <h1 className={title.main}>React × TypeScriptの基礎</h1>

        <div className={section}>
          <h2 className={title.sub}>コンポーネント</h2>
          <Highlight className="js">
            {`  // コンポーネントの作成
  const SampleComponent = () => {
    return (
      <div>
        <p>This is a component.</p>
      </div>
    );
  };
`}
          </Highlight>
        </div>

        <div className={section}>
          <h2 className={title.sub}>テンプレート</h2>
          <Highlight className="js">
            {`  // テンプレート構文
  const SampleTemplate = () => {
    const name: string = "react";
    const link: string = "#";
    type TypeItems = {
      key: number;
      title: string;
    };
    const items: TypeItems[] = [
      {
        key: 1,
        title: "xxx",
      },
    ];
    const isActive: boolean = true;
    const isShow: boolean = false;
    return (
      <div>
        {/* 変数展開 */}
        <p>Hello, {name} !</p>
        {/* データバインド */}
        <a href={link}>ダミーリンク</a>
        {/* 繰り返し処理 */}
        <ul>
          {items.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ul>
        {/* 条件つきレンダリング */}
        {isActive && <p>Paragraph</p>}
        <p style={{ display: isShow ? "initial" : "none" }}>Second paragraph</p>
      </div>
    );
  };
`}
          </Highlight>
        </div>

        <div className={section}>
          <h2 className={title.sub}>class</h2>
          <p>classNameで指定する</p>
          <Highlight className="js">
            {`  const SampleClass = () => {
    // オブジェクト
    const isPrimary = true;
    const buttonClassObject = classNames({
      btn: true,
      "btn-primary": isPrimary,
    });
    // 配列
    const buttonClassArray = classNames(["btn-primary", { btn: true }]);
    return (
      <div>
        <button className={buttonClassObject}>button</button>
        <button className={buttonClassArray}>button</button>
      </div>
    );
  };

`}
          </Highlight>
        </div>

        <div className={section}>
          <h2 className={title.sub}>HTML</h2>
          <Highlight className="js">
            {`  const SampleHtml = () => {
    const htmlString: string = '<div>this is html render</div>';
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };
`}
          </Highlight>
          {SampleHtml()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>event</h2>
          <Highlight className="js">
            {`  const SampleEvent = () => {
    // クリックイベント
    const handleClick = () => {
      alert("on click");
    };
    // useState
    const [name, setName] = useState("");
    // インプットイベント（イベントにtypeを指定する）
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };
    return (
      <div>
        <h3>input event</h3>
        <input
          id=""
          className={input.text}
          type="text"
          name=""
          onChange={handleInput}
        />
        双方向データバインディング：{name}
        <h3>click event</h3>
        <div>
          <button onClick={handleClick} className={btn.blue}>
            Click me
          </button>
        </div>
      </div>
    );
  };
`}
          </Highlight>
          {SampleEvent()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>ref</h2>
          <Highlight className="js">
            {` const refTarget = useRef<HTMLParagraphElement>(null);
  const sampleRef = () => {
    const handleClick = () => {
      console.log(refTarget.current);
    };
    return (
      <>
        <p ref={refTarget}>この要素を参照します。</p>
        <button onClick={handleClick} className={btn.blue}>
          Click me
        </button>
        <p>※コンソールで確認</p>
      </>
    );
  };
`}
          </Highlight>
          {sampleRef()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>コンポーネント間の連携</h2>
          <p>親</p>
          <Highlight className="js">
            {` <Child name="hoge" />
`}
          </Highlight>
          <p>子コンポーネント</p>
          <Highlight className="js">
            {`  import React from "react";

  type Props = {
    name: string | undefined;
  };

  const Child: React.FC<Props> = (props) => {
    const { name } = props;
    return (
      <>
        <div>
          <p>{name}</p>
        </div>
      </>
    );
  };

  export default Child;
`}
          </Highlight>
          <Child name="nameをpropsとして渡す" />
        </div>

        <div className={section}>
          <h2 className={title.sub}>コンポーネント間のイベント通知</h2>
          <p>親</p>
          <Highlight className="js">
            {` <Child testFunction={parentMethod} />
`}
          </Highlight>
          <p>子コンポーネント</p>
          <Highlight className="js">{`
  import React from "react";

  type Props = {
    name?: string | undefined;
    testFunction?: () => void;
  };

  const Child: React.FC<Props> = ({ name, testFunction }) => {
    return (
      <>
        {/* props name */}
        <div>
          <p>{name}</p>
        </div>
        {/* props function */}
        {testFunction ? testFunction() : null}
      </>
    );
  };

  export default Child;
          `}</Highlight>
          <Child functionProp={updateState} />
        </div>

        <div className={section}>
          <h2 className={title.sub}>複数のコンテンツの差し込み</h2>
          <p>親</p>
          <Highlight className="js">
            {`  <Slot header={SampleSlotHeader()} body={SampleSlotBody()} />
`}
          </Highlight>
          <p>Slotコンポーネント</p>
          <Highlight className="js">
            {`  import React, { ReactNode } from "react";

  type Props = {
    header: ReactNode;
    body: ReactNode;
  };

  const Slot: React.FC<Props> = (props) => {
    return (
      <>
        <div>
          <header>{props.header}</header>
          <div>{props.body}</div>
        </div>
      </>
    );
  };

  export default Slot;
`}
          </Highlight>
        </div>
        <div className={section}>
          <h2 className={title.sub}>Reduxを使用したステート管理</h2>
          <TaskList />
          <TaskInput />
        </div>
      </div>
    </>
  );
};

export default Basic;
