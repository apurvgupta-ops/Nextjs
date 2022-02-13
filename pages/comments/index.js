import React, { useState } from "react";

const commentsPage = () => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <h1>commentsPage</h1>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((cm) => {
        return (
          <div key={cm.id}>
            <h4>
              {cm.id} - {cm.text}
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default commentsPage;
