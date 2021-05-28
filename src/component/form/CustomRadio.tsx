import React, { createRef, useState, useEffect } from "react";
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
  options: Radio[];
};

const CustomRadio: React.FC<Props> = ({ options }) => {
  const refRadioButtons = createRef<HTMLInputElement>();
  const [radioVal, setRadioVal] = useState<string | null>("");

  const handleInputRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioVal(e.target.value);
  };

  useEffect(() => {
    // デフォルトのラジオボタンチェック
    const radioButtons = document.querySelectorAll<HTMLInputElement>(".radio");
    setRadioVal("赤");
    radioButtons[0].checked = true;
  }, []);

  return (
    <>
      <div>
        <h2>Radio</h2>
        {options.map((radio) => (
          <label
            key={radio.name}
            className={radioVal === radio.name ? isHover : ""}
          >
            {radio.name}
            <input
              className="radio"
              onChange={handleInputRadio}
              ref={refRadioButtons}
              type="radio"
              name="radio"
              id={radio.cd}
              value={radio.name}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default CustomRadio;
