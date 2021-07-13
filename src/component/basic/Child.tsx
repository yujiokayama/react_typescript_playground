import React from "react";

type Props = {
  name?: string | undefined;
  functionProp?: () => void;
};

const Child: React.FC<Props> = ({ name, functionProp }) => {
  return (
    <>
      {/* props name */}
      <div>
        <p>{name}</p>
      </div>
      {/* props function */}
      {functionProp && <button onClick={functionProp}>CLICK</button>}
    </>
  );
};

export default Child;
