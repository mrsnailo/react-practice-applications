import { Form, useNavigate } from 'react-router-dom';

function EventForm({ method, event }) {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method='post' className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event && event.title}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
          Image
        </label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event && event.image}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event && event.date}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event && event.description}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={cancelHandler}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default EventForm;