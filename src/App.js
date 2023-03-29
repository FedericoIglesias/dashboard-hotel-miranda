import { Root } from "./components/root/root";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { Dashboard } from "./components/dashboard/dashboard";
import { Contact } from "./components/contact";
import { User } from "./components/user";
import { Room } from "./components/room";
import { Booking } from "./components/booking/booking";
import { Reservation } from "./components/booking/reservation";
import { ProtectedRoutes } from "./components/protected-routes";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route  path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Root />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="room" element={<Room />} />
            <Route path="booking" element={<Booking />}/>
            <Route path="booking/:id" element={<Reservation/>}/>
            <Route path="user" element={<User />} />
            <Route path="contact" element={<Contact />} /> 
          </Route>
        </Route>
      </>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
