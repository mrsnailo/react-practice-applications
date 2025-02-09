import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailsPage, {
  loader as DetailsLoader,
  action as DeleteAction,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./Layouts/RootLayout";
import EventRoot from "./Layouts/EventRoot";
import ErrPage from "./pages/ErrPage";
import TestPage from "./pages/TestPage";
import { action as manageEvent } from "./components/EventForm";

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
                  action: DeleteAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manageEvent,
                },
              ],
            },
            { path: "new", element: <NewEventPage />, action: manageEvent },
          ],
        },
        {
          path: "test",
          element: <TestPage />,
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
