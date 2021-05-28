import React from "react";

type Props = {
  name: string;
  value: string;
};

const CustomTextArea: React.FC<Props> = (props) => {
  const { value } = props;
  return (
    <>
      <div>
        <textarea value={value}></textarea>
      </div>
    </>
  );
};

export default CustomTextArea;
