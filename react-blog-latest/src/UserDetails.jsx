import { useParams, Link } from "react-router"

export default function UserDetails(){
    const paramData=useParams();
    return (
        <div>
            <h1>User Details</h1>
            <h4>User Id: {paramData.id}</h4>
            <h3><Link to="/users">Go back</Link></h3>
        </div>
    )
}