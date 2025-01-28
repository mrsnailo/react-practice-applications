import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailsPage, {
  loader as DetailsLoader,
} from "./pages/EventDetailPage";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./Layouts/RootLayout";
import EventRoot from "./Layouts/EventRoot";
import ErrPage from "./pages/ErrPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventID",
              id: "event-details",
              loader: DetailsLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailsPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage />, action: newEventAction },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
