import React from "react";

type Props = {
  text?: string;
};

const CustomInputText: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div>
        <h2>Input Text</h2>
      </div>
    </>
  );
};

export default CustomInputText;
