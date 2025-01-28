import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventPage(params) {
  return (
    <>
      <h2 className="text-center">Add New Event</h2>
      <EventForm />
    </>
  );
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const formdata = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formdata),
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({message: "Failed to fetch data"}), {status: "500"})
  }
  return redirect('/events')
}
