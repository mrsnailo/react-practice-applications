import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm'
function EditEventPage(params) {

  const data = useRouteLoaderData("event-details") 
  return (
    <>
      <h2 className="text-center font-bold underline">Edit Event</h2>
      <EventForm method="PATCH" event={data.event}/>
    </>
  );
}

export default EditEventPage;
