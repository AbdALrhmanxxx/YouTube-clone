import React from "react";
import hamburgerMenu from "../icons/hamburger-menu.svg";
import youtubeLogo from "../icons/youtube-logo.svg";
import searchIcon from "../icons/search.svg";
import voiceIcon from "../icons/voice-search-icon.svg"
import uploadIcon from "../icons/upload.svg";
import YoutubeApp from "../icons/youtube-apps.svg";
import notificationIcon from "../icons/notifications.svg";

export default function Header() {
  return (
      <div className="Header">
        <div className="left-section">
          <img className="ham-logo" src={hamburgerMenu} alt="" />
          <img className="y-logo" src={youtubeLogo} alt="" />
        </div>
        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">
            <img className="search-icon" src={searchIcon} alt="" />
            <div className="tooltip">Search</div>
          </button>
          <button className="voice-search-button">
            <img
              className="voice-search-icon"
              src={voiceIcon}
             alt=""/>
            <div className="tooltip">search with your voice</div>
          </button>
        </div>
        <div className="right-section">
          <img className="upload-icon" src={uploadIcon} alt="" />
          <img className="youtube-icon" src={YoutubeApp} alt="" />
          <div className="notifications-icon-container">
            <img className="noti-icon" src={notificationIcon} alt="" />
            <div className="notifications-count">3</div>
          </div>
          <img className="user-icon" src={"../profile-photo/user.jpg"} alt="" />
        </div>
      </div>
  );
}
