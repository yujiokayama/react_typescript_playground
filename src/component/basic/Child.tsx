import React from "react";

type Props = {
  name?: string | undefined;
};

const Child: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default Child;
