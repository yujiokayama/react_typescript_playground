import React, { useState, useRef } from "react";
import classNames from "classnames";
import { title, btn, input, section } from "../Class";

// Todo
import TaskList from "../component/todo/TaskList";
import TaskInput from "../component/todo/TaskInput";
// 子コンポーネント
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
    const handleClick = () => {
      alert("on click");
    };
    // イベントにtypeを指定する
    const [name, setName] = useState("");
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
  const refTarget = useRef<HTMLDivElement>(null);
  const sampleRef = () => {
    const handleClick = () => {
      console.log(refTarget.current);
    };
    return (
      <>
        <div ref={refTarget}>...</div>
        <button onClick={handleClick} className={btn.blue}>
          Click me
        </button>
      </>
    );
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
      <div>
        <h1 className={title.main}>Reactの基礎</h1>

        <div className={section}>
          <h2 className={title.sub}>コンポーネント</h2>
          {SampleComponent()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>テンプレート</h2>
          {SampleTemplate()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>class</h2>
          {SampleClass()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>HTML</h2>
          {SampleHtml()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>event</h2>
          {SampleEvent()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>ref</h2>
          {sampleRef()}
        </div>
        <div className={section}>
          <h2 className={title.sub}>コンポーネント間の連携</h2>
          <Child name={"hoge"} />
        </div>
        <div className={section}>
          <h2 className={title.sub}>複数のコンテンツの差し込み</h2>
          <Slot header={SampleSlotHeader()} body={SampleSlotBody()} />
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
