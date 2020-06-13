import React from "react";
import { RouteComponentProps } from "@reach/router";
import ReactPlayer from "react-player";
import TextForVideo from "../components/TextForVideo/TextForVideo";
import {useUser} from '../context/user-context';
import {useAuth} from '../context/auth-context';

const VideoPage: React.FC<RouteComponentProps> = () => {
  //TO DO: functionality for playbackRate. At least to add 0.5 speed

  console.log('!!useUser', useUser(), useAuth());
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <h2 className="h3">Watch the video</h2>
        <ReactPlayer
          url={[{ src: "public/videos/TFA.1x01(1).mp4", type: "video/mp4" }]}
          controls={true}
          width="100%"
          height="100%"
          playbackRate={1}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      </div>
      <div className="col-12 col-md-6">
        <TextForVideo />
      </div>
    </div>
  );
};

export default VideoPage;
