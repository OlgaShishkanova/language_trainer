import React, { useState } from "react";
import Octicon, { Check, Question } from "@primer/octicons-react";
import classNames from "classnames";
import { GapItem } from "../components/TextForVideo/TextForVideo";

interface Props {
  name: string;
  index: string;
  id?: string;
  valueOfGap: string;
  arrayOfGaps: GapItem[];
  changeGapItem: (arg: string, arg2: string) => void;
}

const InputText: React.FC<Props> = ({ name, id, valueOfGap, arrayOfGaps, changeGapItem, index }) => {
  const [inputValue, changeInputValue] = useState("");
  const [isMenuOpen, toggleMenu] = useState(false);

  const handleChange = (e: any) => {
    changeInputValue(e.target.value);
    changeGapItem(e.target.value, index);
  };

  return (
    <div className="d-inline-block">
      <div className="input-group input-group-sm mr-2 mb-1 w-auto">
        <input
          className="form-control d-inline-block w-auto"
          aria-label="Text input with segmented dropdown button"
          type="text"
          //id={id}
          value={inputValue}
          name={name}
          onChange={handleChange}
          onKeyDown={(e) => e.keyCode === 13 && handleChange}
        />
        <div className="input-group-append">
          <button
            type="button"
            title="Check the answer"
            className="btn btn-outline-primary"
            disabled={inputValue === ""}
          >
            <Octicon icon={Check} />
          </button>
          <button
            title="Choose the hint"
            type="button"
            className="btn btn-outline-primary"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            <Octicon icon={Question} />
          </button>

          <div
            className={classNames("dropdown-menu", {
              "d-block": isMenuOpen === true,
            })}
          >
            <div className="dropdown-item">Show the First Letter</div>
            <div className="dropdown-item">Show the Last Letter</div>
            <div className="dropdown-item">Length of the Word</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputText;
