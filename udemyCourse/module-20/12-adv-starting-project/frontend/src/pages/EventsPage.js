import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventPage(params) {
  const events = useLoaderData();
  const length = events.length;
  return (
    <>
      <h2 className="text-center font-bold underline">Events</h2>
      {length > 0 ? (
        <EventsList events={events} />
      ) : (
        <p className="text-center">No events found.</p>
      )}
    </>
  );
}
export default EventPage;


export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to fetch data" }), {
      status: "500",
    });
  } else {
    const resdata = await response.json();
    return resdata.events;
  }
}
