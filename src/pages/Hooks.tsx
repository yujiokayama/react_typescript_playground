import React from "react";

// component
import Header from "../component/Header";
import UseState from "../component/react/hooks/UseState";
import UseEffect from "../component/react/hooks/UseEffect";
import UseRef from "../component/react/hooks/UseRef";

import { title } from "../Class";

const Hooks: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-10">
        <h1 className={title.main}>React Hooks</h1>
        <p></p>
        <h2>React Hooks</h2>
        <UseState />
        <UseEffect />
        <UseRef />
      </div>
    </>
  );
};

export default Hooks;
