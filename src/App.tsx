import { Root } from "./components/root/root";
import React from 'react'
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
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Root />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/room" element={<Room />} />
            <Route path="/new-room" element={<NewRoom />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:id" element={<Reservation />} />
            <Route path="/user" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );


  return (
    <>
      <Provider store={store as any}>
        <LoginProvider>
          <RouterProvider router={router} />
        </LoginProvider>
      </Provider>
    </>
  );
}

export default App;
