import EventForm from "../components/EventForm";

function NewEventPage(params) {
  return (
    <>
      <h2 className="text-center">Add New Event</h2>
      <EventForm method="POST" />
    </>
  );
}

export default NewEventPage;
