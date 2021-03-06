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
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
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
              <button onClick={() => deleteComment(cm.id)}>Delete</button>
            </h4>
          </div>
        );
      })}
    </>
  );
};

export default commentsPage;

// [...params]  =  catch all routes , this routes redirect to any page which is written in the url except base url.
//[[...params]] = this includes all the routes
