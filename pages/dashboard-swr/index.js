import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const dashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return "An error occur";
  if (!data) return "Loading...";
  return (
    <>
      <h1>dashboardSWR</h1>
      <h4>Likes - {data.likes}</h4>
      <h4>Followers - {data.followers}</h4>
      <h4>Following - {data.following}</h4>
      <h4>Posts - {data.posts}</h4>
    </>
  );
};

export default dashboardSWR;
