import React from "react";

const post = ({ post }) => {
  return (
    <>
      <div>
        <h4>
          {post.id} -{post.title}
        </h4>
        <h5>{post.body}</h5>
      </div>
    </>
  );
};

export default post;

export async function getStaticPaths() {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await reponse.json();

  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
