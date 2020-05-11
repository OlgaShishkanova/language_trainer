import React from "react";
import data from "../../static_data/script.json";
import InputText from "../../shared/InputText";

interface scriptWord {
  text: string;
  gap: boolean;
}

const TextForVideo: React.FC = () => {
  return (
    <div className="">
      <h2 className="h3">Fill the gaps</h2>
      <div>
        {data.map((phrase, key) => {
          return (
            <div key={key}>
              {phrase.map((word, key) => {
                const { text, gap } = word as scriptWord;
                return(
                  <span key={key}>{gap ? <InputText name="gap_for_word" valueOfGap={text}  /> : <span>{text} </span>}</span>
                )
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TextForVideo;
