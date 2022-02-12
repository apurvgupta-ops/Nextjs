import React from "react";

const category = ({ articles, category }) => {
  return (
    <>
      <h1>
        <i>{category}</i> category here
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>
              {article.id} - {article.title}{" "}
            </h3>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default category;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news/?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
