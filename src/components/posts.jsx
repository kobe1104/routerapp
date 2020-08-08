import React from "react";
import QueryString from "query-string";

const Posts = ({ match, location }) => {
  const { sortBy, approve } = QueryString.parse(location.search);
  console.log(sortBy, approve);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.month}
    </div>
  );
};

export default Posts;
