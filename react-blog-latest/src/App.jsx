import { Route, Routes, Link, NavLink, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Students from "./Students";
import Departments from "./Departments";
import Clg_Details from "./Clg_Details";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      {/* 
    <NavLink to="/" >Home Page   </NavLink>
    <NavLink to="/about" >About Page  </NavLink>
    <NavLink to="/contact" >Contact Page   </NavLink> */}

      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/list?" element={<Users />}/>
            <Route path="/users/:id/:name?" element={<UserDetails/>}/>
          </Route>


          <Route path="ban"> 
          <Route path="/ban/user">
            <Route path="/ban/user/login" element={<Login />} />
          </Route>
          </Route>
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Students />} />
          <Route path="departments" element={<Departments />} />
          <Route path="clg_details" element={<Clg_Details />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />

        {/* <Route path="/*" element={<Navigate to ="/"/>} /> */}
      </Routes>
    </>
  );
}

export default App;
