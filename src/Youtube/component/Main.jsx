import React from "react";
import Videos from "./Videos";
import { data } from "../data";
export default function Main() {
  return(
    <div className="web-grid">
      {data.map((videos) => (
        <Videos videosOBJ={videos} key={videos.channel.name} />
      ))}
    </div>
  );
}
