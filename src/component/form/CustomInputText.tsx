import React from "react";

type Props = {
  text: string;
};

const CustomInputText: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div>
        <input id="" type="text" name="" value={text} />
      </div>
    </>
  );
};

export default CustomInputText;
