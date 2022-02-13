import React, { useState } from "react";

const commentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComments = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // setComment("");
    console.log(data);
  };

  return (
    <>
      <h1>commentsPage</h1>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComments}>Submit Comments</button>
      </div>
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
