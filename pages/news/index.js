import React from "react";

const index = ({ article }) => {
  return (
    <>
      <h1>All Article list are here</h1>
      {article.map((ar) => {
        return (
          <div key={ar.id}>
            <h3>
              {ar.id} - {ar.title} | {ar.category}
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      article: data,
    },
  };
}
