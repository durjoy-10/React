import { Link, NavLink, Outlet } from "react-router";

export default function College(){
    return (
        <div className="college" style={{textAlign:'center'}}>
            <h2>College Page</h2>
            <h3><Link to="/">Go Back to Home Page</Link></h3>

            <NavLink className="link" to=""> Students </NavLink>
            <NavLink className="link" to="departments"> Departments </NavLink>
            <NavLink className="link" to="clg_details"> College Details </NavLink>
            <Outlet />

        </div>
    )
}