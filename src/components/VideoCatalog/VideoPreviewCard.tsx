import React from "react";
import { Link } from "@reach/router";

interface Props {
  item: {
    title: string;
    imgSrc: string;
    desc: string;
    id: string;
    lang: string;
  };
}

const VideoPreviewCard: React.FC<Props> = ({ item }) => {
  const { title, imgSrc, desc, id } = item;

  return (
    <Link className="text-decoration-none text-body" to={`/video?id=${id}`}>
      <div className="card mt-3">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={imgSrc} className="card-img" alt={title} />
          </div>

          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoPreviewCard;
