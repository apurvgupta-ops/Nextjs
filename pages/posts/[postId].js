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

// FALLBACK : FLASE
//1.when fallback is se to false ,if there are no page returned from getStaticPaths then it returned the 404 page
//2.The paths returned from getStaticProps will be rendered to html at build time by setStaticPaths

//FALLBACK : TRUE
//1.The paths returned from getStaticProps will be rendered to html at build time by setStaticPaths
//2.when fallback is se to false ,if there are no page returned from getStaticPaths then it not return the 404 page, it return hr fallback ui
//3.Fallback is true, used when the site is large and has lot of static pages like e-commerce site.

//FALLBACK : BLOCKING
//1.The paths returned from getStaticProps will be rendered to html at build time by setStaticPaths
