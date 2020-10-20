import React from "react";

export default function ProfileCard({ handle, userInfo }) {
  return userInfo ? (
    <div className="centered">
      <div className="profileCard">
        <div className="avatar">
          <img src={userInfo.avatar_url} />
        </div>
        <div className="aligned">
          <div className="handle">{handle}</div>
        </div>
        <div className="name">{userInfo.name}</div>
        <div className="followers">Followers: {userInfo.followers}</div>
        <div className="repos">Repos: {userInfo.public_repos}</div>
        <div className="url">URL: {userInfo.html_url}</div>
        <div className="aligned">
          <button className="seeRepos">See Repos</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="centered">
      <div className="profileCard">
        <div className="aligned">Profile Not Found</div>
      </div>
    </div>
  );
}
