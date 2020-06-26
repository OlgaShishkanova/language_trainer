import React from "react";
import { RouteComponentProps } from "@reach/router";

const VideoCatalog: React.FC<RouteComponentProps> = () => {
  const videoArr = [
    {
      title: "Türkisch für Anfänger 1x01(1)",
      imgSrc: "public/logo512.png",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: '1'  
    },
    {
        title: "Türkisch für Anfänger 1x01(2)",
        imgSrc: "public/logo512.png",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        id: '2'  
      }
  ];

  return <div></div>;
};

export default VideoCatalog;
