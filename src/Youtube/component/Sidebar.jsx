import React from "react";
import Links from "./Links";
import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import subscriptions from "../icons/subscriptions.svg";
import origins from "../icons/originals.svg";
import youtubeMusic from "../icons/youtube-music.svg";
import library from "../icons/library.svg";
export default function Sidebar({ open }) {
  const links = [
    {
      id: 1,
      name: "Home",
      image: home,
    },
    {
      id: 2,
      name: "Explore",
      image: explore,
    },
    {
      id: 3,
      name: "Subscriptions",
      image: subscriptions,
    },
    {
      id: 4,
      name: "Origins",
      image: origins,
    },
    {
      id: 5,
      name: "Library",
      image: library,
    },
    {
      id: 6,
      name: "YouTubeMusic",
      image: youtubeMusic,
    },
  ];
  return (
    <div className={open ? "is-open " : ""}>
      <div className="side-bar">
        {links.map((link) => (
          <Links linksObj={link} open={open} key={link.id} />
        ))}
      </div>
    </div>
  );
}
