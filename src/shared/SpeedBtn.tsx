import React from "react";
import classNames from "classnames";

interface Props {
    value: number;
    playbackRate: number;
    changePlaybackRate: (arg1: number) => void;
}
const SpeedBtn: React.FC<Props> = ({value, changePlaybackRate, playbackRate}) => {
  return (
    <button
    className={classNames("btn btn-sm bg-light mr-3", {'darker-light': playbackRate === value})}
      onClick={() => changePlaybackRate(value)}
    >
      {value}x
    </button>
  );
};

export default SpeedBtn;
