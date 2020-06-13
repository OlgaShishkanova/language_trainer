import React, { useState, useEffect } from "react";
import data from "../../static_data/script.json";
import InputInTextToFill from "../../shared/InputInTextToFill";

interface scriptWord {
  text: string;
  gap: boolean;
}
export interface GapItem {
  key: string;
  gapText: string;
  currentGapValue: string;
}

const TextForVideo: React.FC = () => {
  const [arrayOfGaps, changeArrayOfGaps] = useState<GapItem[]>([]);
  const [allChildValuesChecking, checkAllChildValues] = useState(0);
  const [allChildValuesShowing, showAllChildValues] = useState(0);

  useEffect(() => {
    data.forEach((phrase, key) => {
      phrase.forEach((word, innerKey) => {
        if (word.gap) {
          changeArrayOfGaps((arrayOfGaps) => [
            ...arrayOfGaps,
            {
              key: `${innerKey}_${key}`,
              gapText: word.text,
              currentGapValue: "",
            },
          ]);
        }
      });
    });
  }, []);

  const changeGapItem = (value: string, key: string) => {
    changeArrayOfGaps((arrayOfGaps) =>
      arrayOfGaps.map((el) =>
        el.key === key ? { ...el, currentGapValue: value } : el
      )
    );
  };

  const checkAllAnswers = () => {
    checkAllChildValues((allChildValuesChecking) => allChildValuesChecking + 1);
  };

  const showAllAnswers = () => {
    showAllChildValues((allChildValuesShowing) => allChildValuesShowing + 1);
  };

  const regexPunctuation = /[.,!?;\u2026]/;

  return (
    <div className="">
      <h2 className="h3">Fill the gaps</h2>
      <div>
        {data.map((phrase, key) => {
          return (
            <div key={key}>
              {phrase.map((word, innerKey) => {
                const { text, gap } = word as scriptWord;
                const gapTextWithPunctuation =
                  gap && text.match(regexPunctuation) !== null;
                return (
                  <span key={`${innerKey}_${key}`}>
                    {gap ? (
                      <>
                        <InputInTextToFill
                          index={`${innerKey}_${key}`}
                          changeGapItem={changeGapItem}
                          arrayOfGaps={arrayOfGaps}
                          name="gap_for_word"
                          valueOfGap={
                            gapTextWithPunctuation ? text.split(regexPunctuation)[0] : text
                          }
                          allChildValuesChecking={allChildValuesChecking}
                          allChildValuesShowing={allChildValuesShowing}
                          currentValue={
                            arrayOfGaps.find(
                              (i) => i.key === `${innerKey}_${key}`
                            )?.currentGapValue || ""
                          }
                        />
                        {gapTextWithPunctuation && (
                          <span>{text.slice(text.search(regexPunctuation))} </span>
                        )}
                      </>

                    ) : (
                      <span>{text} </span>
                    )}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={checkAllAnswers}
        className="btn btn-primary mt-4"
      >
        Check everything
      </button>

      <button
        type="button"
        onClick={showAllAnswers}
        className="btn btn-secondary mt-4 ml-3"
      >
        Show all answers
      </button>
    </div>
  );
};

export default TextForVideo;
