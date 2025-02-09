import {
  Form,
  useNavigate,
  useActionData,
  redirect,
  useNavigation,
} from "react-router-dom";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  function cancelHandler() {
    navigate("..");
  }
  const isSubmitting = navigation.state !== "idle";
  return (
    <Form
      method={method}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li className="text-red-600" key={err}>
              {err}
            </li>
          ))}
        </ul>
      )}

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
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
        <label
          htmlFor="image"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
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
        <label
          htmlFor="date"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
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
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
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
          disabled={isSubmitting}
          type="submit"
          className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
    ${
      isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-600"
    }`}
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const formdata = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const id = params.eventID;

  let url = "http://localhost:8080/events";

  if (request.method === "PATCH") {
    url = "http://localhost:8080/events/" + id;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  });

  console.log(response);
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Failed to fetch data" }), {
      status: "500",
    });
  }
  return redirect("/events");
}
