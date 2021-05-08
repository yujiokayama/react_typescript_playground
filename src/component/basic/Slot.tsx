import React, { ReactNode } from "react";

type Props = {
  header: ReactNode;
  body: ReactNode;
};

const Slot: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <header>{props.header}</header>
        <div>{props.body}</div>
      </div>
    </>
  );
};

export default Slot;
