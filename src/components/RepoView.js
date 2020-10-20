import React from "react";

export default function RepoView({ repo }) {
  return (
    <div className="repoView">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
}
