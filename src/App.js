import React, { useState, useEffect } from "react";
import MainInput from "./components/MainInput";
const config = require("./config");

export default function App() {
  return (
    <div>
      <div className="mainTitle">Welcome to GitHub Fetcher</div>
      <MainInput />
    </div>
  );
}
