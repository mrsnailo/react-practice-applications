import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventPage(params) {
  const events = useLoaderData();
  return (
    <>
      <h2 className="text-center font-bold underline">Events</h2>
      <EventsList events={events} />
    </>
  );
}
export default EventPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Failed to fetch data"}), {status: "500"})
  } else {
    const resdata = await response.json();
    return resdata.events;
  }
}
