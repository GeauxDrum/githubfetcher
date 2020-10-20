import React, { useState, useEffect } from "react";
import MainInput from "./components/MainInput";
import ProfileCard from "./components/ProfileCard";
const config = require("./config");

export default function App() {
  const [handle, setHandle] = useState();
  const [userInfo, setUserInfo] = useState();

  const goFetch = async (handle) => {
    console.log("fetching: ", handle);
    const results = await fetch(`https://api.github.com/users/${handle}`);
    const data = await results.json();
    console.log(data);
    setHandle(handle);
    setUserInfo(data);
  };

  return (
    <div>
      <div className="mainTitle">Welcome to GitHub Fetcher</div>
      <MainInput goFetch={goFetch} />
      {userInfo && userInfo.message === "Not Found" ? (
        <ProfileCard />
      ) : (
        userInfo && <ProfileCard handle={handle} userInfo={userInfo} />
      )}
    </div>
  );
}
