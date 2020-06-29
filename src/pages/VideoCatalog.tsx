import React from "react";
import { RouteComponentProps } from "@reach/router";
import VideoPreviewCard from "../components/VideoCatalog/VideoPreviewCard";

const VideoCatalog: React.FC<RouteComponentProps> = () => {
  //TODO: get the array of video here (language as a param)
  const videoArr = [
    {
      title: "Türkisch für Anfänger 1x01(1)",
      imgSrc: "public/logo512.png",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: "1",
      lang: "de",
    },
    {
      title: "Türkisch für Anfänger 1x01(2)",
      imgSrc: "public/logo512.png",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: "2",
      lang: "de",
    },
  ];

  return (
    <div>
      <div>
        PLACE FOR SEARCH
      </div>
      {videoArr.map((el) => {
        return <VideoPreviewCard item={el} />;
      })}
    </div>
  );
};

export default VideoCatalog;
