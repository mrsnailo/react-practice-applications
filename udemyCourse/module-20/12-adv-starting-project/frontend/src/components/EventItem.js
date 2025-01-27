import { Link } from "react-router-dom";

function EventItem({ event }) {
  function startDeleteHandler() {
    // Handle delete logic here
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-[60rem] m-auto">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
        <time className="text-gray-600 block mb-4">{event.date}</time>
        <p className="text-gray-700 mb-6">{event.description}</p>
        <menu className="flex space-x-4">
          <Link
            to="edit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Edit
          </Link>
          <button
            onClick={startDeleteHandler}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </menu>
      </div>
    </article>
  );
}

export default EventItem;