import React, { createRef, useState } from "react";
import classNames from "classnames";

/**
 * classz
 */
const isHover = classNames(["bg-blue-700", "text-white"]);

/**
 * 親から受け取るpropsの型定義
 */
type Radio = {
  cd: string;
  name: string;
};
type Props = {
  options?: Radio[] | undefined;
};

const CustomRadio: React.FC<Props> = (props) => {
  const refRadioButtons = createRef<HTMLInputElement>();
  const [radioVal, setRadioVal] = useState<string>("");

  const handleInputRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioVal(event.target.value);
  };

  return (
    <>
      <div>
        {props.options?.map((btn) => (
          <label
            key={btn.name}
            className={radioVal === btn.name ? isHover : ""}
          >
            {btn.name}
            <input
              onChange={handleInputRadio}
              ref={refRadioButtons}
              type="radio"
              name="radio"
              id={btn.cd}
              value={btn.name}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default CustomRadio;
