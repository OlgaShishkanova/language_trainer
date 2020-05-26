import React, { useState, useEffect, useRef } from "react";
import Octicon, { Check, Question } from "@primer/octicons-react";
import classNames from "classnames";
import { GapItem } from "../components/TextForVideo/TextForVideo";
import { compareStrings } from "../utils/utilityFunctions";
import useOutsideClick from "../hooks/useOutsideClick";

interface Props {
  name: string;
  index: string;
  currentValue: string;
  id?: string;
  valueOfGap: string;
  arrayOfGaps: GapItem[];
  allChildValuesChecking: number;
  changeGapItem: (arg: string, arg2: string) => void;
  allChildValuesShowing: number;
}

const InputInTextToFill: React.FC<Props> = ({
  name,
  id,
  valueOfGap,
  allChildValuesChecking,
  changeGapItem,
  index,
  currentValue,
  allChildValuesShowing,
}) => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const [isWordLengthShown, showWordLength] = useState<boolean>(false);
  const [isAnswerShown, changeIsAnswerShown] = useState<boolean>(false);
  const [isAnswerRight, checkAnswer] = useState<string>("");
  const ref: any = useRef();
  const isInitialMount = useRef(true);

  useOutsideClick(ref, () => {
    toggleMenu(false);
  });

  const handleChange = (e: any) => {
    changeGapItem(e.target.value, index);
  };
  const showFirstLetter = () => {
    changeGapItem(valueOfGap.charAt(0) + currentValue, index);
    toggleMenu(false);
  };
  const showTheAnswer = () => {
    changeGapItem(valueOfGap, index);
    changeIsAnswerShown(true);
    toggleMenu(false);
  };

  const checkTheCurrentAnswer = () => {
    if (compareStrings(currentValue, valueOfGap)) {
      checkAnswer("right");
    } else {
      checkAnswer("wrong");
    }
  };
  useEffect(() => {
    if (currentValue !== valueOfGap && isAnswerRight !== "") {
      checkAnswer("");
    }
  }, [currentValue]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      checkTheCurrentAnswer();
    }
  }, [allChildValuesChecking]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      showTheAnswer();
    }
  }, [allChildValuesShowing]);

  return (
    <div className="d-inline-block">
      <div className="input-group input-group-sm mr-2 mb-1 w-auto">
        <input
          className={classNames(
            "form-control d-inline-block",
            { "text-success": isAnswerRight === "right" },
            { "text-danger": isAnswerRight === "wrong" },
            "custom-input",
            { "custom-input__underline--separated": isWordLengthShown }
          )}
          aria-label="Text input with segmented dropdown button"
          type="text"
          style={{
            width: isWordLengthShown
              ? `${valueOfGap.length * (1 + 0.5)}ch`
              : "auto",
          }}
          //id={id}
          value={currentValue}
          name={name}
          maxLength={isWordLengthShown ? valueOfGap.length : undefined}
          onChange={handleChange}
          onKeyDown={(e) => e.keyCode === 13 && handleChange}
        />

        <div ref={ref} className="input-group-append">
          <button
            type="button"
            title="Check the answer"
            className="btn btn-outline-primary"
            disabled={currentValue === ""}
            onClick={checkTheCurrentAnswer}
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
            <div
              className={classNames("dropdown-item", {
                disabled: currentValue.charAt(0) === valueOfGap.charAt(0),
              })}
              onClick={showFirstLetter}
            >
              Show the First Letter
            </div>
            {/* <div className="dropdown-item">Show the Last Letter</div> */}
            <div
              className={classNames("dropdown-item", {
                disabled: isWordLengthShown,
              })}
              onClick={() => {
                showWordLength(true);
                toggleMenu(false);
              }}
            >
              Length of the Word
            </div>
            <div
              className={classNames("dropdown-item", {
                disabled: isAnswerShown && currentValue === valueOfGap,
              })}
              onClick={showTheAnswer}
            >
              Show the Answer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InputInTextToFill);
