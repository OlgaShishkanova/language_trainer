import React, { useState, useEffect } from "react";
import data from "../../static_data/script.json";
import InputText from "../../shared/InputText";

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

  useEffect(() => {
    data.forEach((phrase, key) => {
      phrase.forEach((word, innerKey) => {
        if (word.gap) {
          changeArrayOfGaps(arrayOfGaps =>[
            ...arrayOfGaps,
            { key: `${innerKey}_${key}`, gapText: word.text, currentGapValue: "" },
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
  return (
    <div className="">
      <h2 className="h3">Fill the gaps</h2>
      <div>
        {data.map((phrase, key) => {
          return (
            <div key={key}>
              {phrase.map((word, innerKey) => {
                const { text, gap } = word as scriptWord;
                return (
                  <span key={`${innerKey}_${key}`}>
                    {gap ? (
                      <InputText
                        index={`${innerKey}_${key}`}
                        changeGapItem={changeGapItem}
                        arrayOfGaps={arrayOfGaps}
                        name="gap_for_word"
                        valueOfGap={text}
                        currentValue={arrayOfGaps.find(i => i.key === `${innerKey}_${key}`)?.currentGapValue || ''}
                      />
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
    </div>
  );
};

export default TextForVideo;
