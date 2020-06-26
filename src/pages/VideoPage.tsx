import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import ReactPlayer from "react-player";
import TextForVideo from "../components/TextForVideo/TextForVideo";
import SpeedBtn from "../shared/SpeedBtn";

const VideoPage: React.FC<RouteComponentProps> = () => {
  //TO DO: functionality for playbackRate. At least to add 0.5 speed
  const [playbackRate, changePlaybackRate] = useState<number>(1);
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <h2 className="h3">Watch the video</h2>
        <ReactPlayer
          url={[{ src: "public/videos/TFA.1x01(1).mp4", type: "video/mp4" }]}
          controls={true}
          width="100%"
          height="100%"
          playbackRate={playbackRate}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                disablePictureInPicture: true,
              },
            },
          }}
        />
        <div className="mt-3">
          <p className='d-inline-block mr-3'>Speed:</p>
          <SpeedBtn value={0.25} changePlaybackRate={changePlaybackRate} playbackRate={playbackRate}/>
          <SpeedBtn value={0.5} changePlaybackRate={changePlaybackRate} playbackRate={playbackRate}/>
          <SpeedBtn value={1} changePlaybackRate={changePlaybackRate} playbackRate={playbackRate}/>
          <SpeedBtn value={1.5} changePlaybackRate={changePlaybackRate} playbackRate={playbackRate}/>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <TextForVideo />
      </div>
    </div>
  );
};

export default VideoPage;
