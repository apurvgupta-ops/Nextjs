//Client side rendering

import React, { useEffect, useState } from "react";

const dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setLoading(false);
    }

    fetchdata();
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <h4>Likes - {dashboardData.likes}</h4>
      <h4>Followers - {dashboardData.followers}</h4>
      <h4>Following - {dashboardData.following}</h4>
      <h4>Posts - {dashboardData.posts}</h4>
    </>
  );
};

export default dashboard;
