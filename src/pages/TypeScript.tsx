import React from "react";

// component
import Header from "../component/Header";
import Type from "../component/typescript/Type";
import Function from "../component/typescript/Function";
import AliasAndInterface from "../component/typescript/AliasAndInterface";
import Generics from "../component/typescript/Generics";

// styles
import { title } from "../Class";
import "../assets/scss/styles.scss";

const TypeScript: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-10">
        <h1 className={title.main}>TypeScriptの基礎</h1>
        <section>
          <Type />
          <Function />
          <AliasAndInterface />
          <Generics />
        </section>
      </div>
    </>
  );
};

export default TypeScript;
