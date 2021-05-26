import React from "react";

// component
import Header from "../component/Header";
import UseState from "../component/react/hooks/UseState";
import UseEffect from "../component/react/hooks/UseEffect";
import UseContext from "../component/react/hooks/UseContext";

import { title } from "../Class";

const Hooks: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-10">
        <h1 className={title.main}>React Hooks</h1>
        <h2>React Hooks</h2>
        <UseState />
        <UseEffect />
        <UseContext />
      </div>
    </>
  );
};

export default Hooks;
