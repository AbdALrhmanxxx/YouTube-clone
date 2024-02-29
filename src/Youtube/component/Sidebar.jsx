import React from 'react'
import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import subscriptions from "../icons/subscriptions.svg"
import origins from "../icons/originals.svg";
import youtubeMusic from "../icons/youtube-music.svg";
import library from "../icons/library.svg";
export default function Sidebar() {
  return (
    <div>
      <div className="side-bar">
        <div className="sidebar-link">
          <img src={home} alt="" />
          <div>Home</div>
        </div>
        <div className="sidebar-link">
          <img src={explore} alt="" />
          <div>Explore</div>
        </div>
        <div className="sidebar-link">
          <img src={subscriptions} alt="" />
          <div>Subscriptions</div>
        </div>
        <div className="sidebar-link">
          <img src={origins} alt="" />
          <div>Originals</div>
        </div>
        <div className="sidebar-link">
          <img src={youtubeMusic} alt="" />
          <div>Youtube music</div>
        </div>
        <div className="sidebar-link">
          <img src={library} alt="" />
          <div>library</div>
        </div>
      </div>
    </div>
  );
}
