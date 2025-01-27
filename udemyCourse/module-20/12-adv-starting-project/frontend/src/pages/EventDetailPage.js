import EventItem from "../components/EventItem";

import { useRouteLoaderData} from "react-router-dom";

function EventDetailsPage() {
  const data = useRouteLoaderData("event-details");
  console.log(data)
  return (
    <>
      <h2 className="text-center font-bold underline">Event Details</h2>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailsPage;

export async function loader({ result, params }) {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id);
  
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Fetching data failed" }, { status: "500" })
    );
  }
  console.log(response);
  
  return response;
}
