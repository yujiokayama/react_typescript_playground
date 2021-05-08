import React from "react";

type Props = {
  name: string | undefined;
};

const Child: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <>
      <div>
        <p>{name}</p>
      </div>
    </>
  );
};

export default Child;
