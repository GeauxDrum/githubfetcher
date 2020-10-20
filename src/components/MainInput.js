import React, { useState } from "react";

export default function MainInput({ goFetch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    goFetch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mainInput">
      <input
        type="text"
        placeholder="input GitHub handle"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
