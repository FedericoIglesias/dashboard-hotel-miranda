import { Root } from "./components/root/root";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { Dashboard } from "./components/dashboard/dashboard";
import { Contact } from "./components/contact/contact";
import { User } from "./components/user/user";
import { Room } from "./components/room/rooms";
import { Booking } from "./components/booking/booking";
import { Reservation } from "./components/booking/reservation";
import { ProtectedRoutes } from "./pages/protected-routes";
import { NewRoom } from "./components/room/new-room";
import { NewUser } from "./components/user/new-user";
import { Login } from "./pages/login";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { LoginProvider } from "./context/loginContext";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/dashboard-hotel-miranda" element={<ProtectedRoutes />}>
          <Route path="/dashboard-hotel-miranda" element={<Root />} >
            <Route path="/dashboard-hotel-miranda/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-hotel-miranda/room" element={<Room />} />
            <Route path="/dashboard-hotel-miranda/new-room" element={<NewRoom />} />
            <Route path="/dashboard-hotel-miranda/booking" element={<Booking />} />
            <Route path="/dashboard-hotel-miranda/booking/:id" element={<Reservation />} />
            <Route path="/dashboard-hotel-miranda/user" element={<User />} />
            <Route path="/dashboard-hotel-miranda/new-user" element={<NewUser />} />
            <Route path="/dashboard-hotel-miranda/contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );


  return (
    <>
      <Provider store={store}>
        <LoginProvider>
          <RouterProvider router={router} />
        </LoginProvider>
      </Provider>
    </>
  );
}

export default App;
