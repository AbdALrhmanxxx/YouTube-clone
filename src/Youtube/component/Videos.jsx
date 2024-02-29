import React from "react";
export default function Videos({ videosOBJ }) {
  let views = Number(videosOBJ.channel.views);
  let time = Number(videosOBJ.channel.time);
  return (
    <div>
      <div className="video-info-grid">
        <div className="thumbnail-row">
          <img className="thumb1" src={videosOBJ.channel.picture} alt="" />
          <div className="video-time">{videosOBJ.time}</div>
        </div>
        <div className="video-information">
          <div>
            <img className="profile-photo" src={videosOBJ.picture} alt="" />
          </div>
          <div className="video-title-b">
            <div>
              <p className="video-title">{videosOBJ.title}</p>
            </div>
            <div>
              <p className="video-auther">{videosOBJ.channel.name}</p>
            </div>
            <div>
              <p className="video-states">
                {(views >= 1000000 && views / 1000000 + "M ") ||
                  (views > 1000 && views < 1000000 && views / 1000 + "K ") ||
                  views}
                views &#183;{" "}
                {(time < 30 && time + " day ") ||
                  (time > 30 &&
                    time < 365 &&
                    Math.round(time / 30) + " month ") ||
                  (time > 365 && Math.round(time / 365) + " year ")}
                ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
