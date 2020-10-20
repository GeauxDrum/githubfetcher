import React, { useState } from "react";
import MainInput from "./components/MainInput";
import ProfileCard from "./components/ProfileCard";
import RepoView from "./components/RepoView";

export default function App() {
  const [handle, setHandle] = useState();
  const [userInfo, setUserInfo] = useState();
  const [repos, setRepos] = useState();

  const goFetch = async (handle) => {
    console.log("fetching: ", handle);
    const results = await fetch(`https://api.github.com/users/${handle}`);
    const data = await results.json();
    console.log("User Data: ", data);
    setHandle(handle);
    setUserInfo(data);
  };

  const getRepos = async (reposURL) => {
    console.log("getting repos from : ", reposURL);
    const results = await fetch(reposURL);
    const data = await results.json();
    console.log("back from the interwebs with: ", data);
    setRepos(data);
  };

  return (
    <div>
      <div className="centered">
        <div className="titleWrapper">
          <div className="mainTitle">Welcome to GitHub Fetcher</div>
          <MainInput goFetch={goFetch} />
        </div>
      </div>
      {userInfo && userInfo.message === "Not Found" ? (
        <ProfileCard />
      ) : (
        userInfo && (
          <ProfileCard
            handle={handle}
            userInfo={userInfo}
            getRepos={getRepos}
          />
        )
      )}
      <div>
        {repos && (
          <div className="repoWrapper">
            <div className="activeRepos">Active Repos: </div>
            {repos.map((repo) => {
              return <RepoView repo={repo} key={repo.id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
