import React from "react";
import Video from "./Video";
import { Link } from "react-router-dom";

const PlayList = () => (
  <div>
    <h3>PlayList</h3>
    <Link to="/create-video">Add video</Link>
    <div>
      <Video />
    </div>
  </div>
);

export default PlayList;
