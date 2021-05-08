import React from "react";
import CustomRadio from "../component/form/CustomRadio";

import { title } from "../Class";

const radioOptions = [
  { cd: "red", name: "赤" },
  { cd: "blue", name: "青" },
  { cd: "green", name: "緑" }
];

const Form: React.FC = () => {
  return (
    <>
      <div>
        <h1 className={title.main}>Form要素の取り扱い</h1>
        <CustomRadio options={radioOptions} />
      </div>
    </>
  );
};

export default Form;
