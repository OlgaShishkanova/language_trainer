import React from "react";
import { RouteComponentProps } from "@reach/router";
import ReactPlayer from "react-player";

const VideoPage: React.FC<RouteComponentProps> = () => {
  return (
    <div className="">
      <ReactPlayer
        url={[{ src: "./videos/TFA.1x01(1).mp4", type: "video/mp4" }]}
        controls={true}
        config={{ file: { 
          attributes: {
            controlsList: 'nodownload'
          }
        }}}
      />
    </div>
  );
};

export default VideoPage;
