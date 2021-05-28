import React from "react";

// component
import Header from "../component/Header";
import CustomRadio from "../component/form/CustomRadio";
import CustomInputText from "../component/form/CustomInputText";

import { title } from "../Class";

const radioOptions = [
  { cd: "red", name: "赤" },
  { cd: "blue", name: "青" },
  { cd: "green", name: "緑" },
];

const Form: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-10">
        <h1 className={title.main}>Form要素の取り扱い</h1>
        <CustomRadio options={radioOptions} />
        <CustomInputText />
      </div>
    </>
  );
};

export default Form;
