import EventItem from "../components/EventItem";

import { redirect, useRouteLoaderData } from "react-router-dom";

function EventDetailsPage() {
  const data = useRouteLoaderData("event-details");
  return (
    <>
      <h2 className="text-center font-bold underline">Event Details</h2>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailsPage;

export async function loader({ params, request }) {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Fetching data failed" }, { status: "500" })
    );
  }

  return response;
}

export async function action({ params, request }) {
  const id = params.eventID;
console.log(request.method)
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  console.log(response)

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not delete event" }, { status: "500" })
    );
  }
  return redirect("/events");
}
