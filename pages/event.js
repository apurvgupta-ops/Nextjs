import { useRouter } from "next/router";
import React, { useState } from "react";

const event = ({ eventlist }) => {
  const [events, setEvent] = useState(eventlist);
  const router = useRouter();

  const fetchCategory = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvent(data);
    // router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchCategory}>Sports category</button>
      <h1>Eventlist</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h4>
              {event.id} - {event.title} | {event.category}
            </h4>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default event;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventlist: data,
    },
  };
}
