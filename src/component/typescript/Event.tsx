import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/agate.css";

const Event: React.FC = () => {
  return (
    <>
      <div>
        <h2>イベント</h2>
        <Highlight className="js">
          {`  type Props = {
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };
`}
        </Highlight>
      </div>
    </>
  );
};

export default Event;
