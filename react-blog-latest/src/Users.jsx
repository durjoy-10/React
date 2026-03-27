import { Link } from "react-router";
export default function Users() {
  const userData = [
    { id: 1, name: "Durjoy" },
    { id: 2, name: "Abir" },
    { id: 3, name: "Shuvo" },
    { id: 4, name: "Anjan" },
    { id: 5, name: "Benoy" },
    { id: 6, name: "Hadi" },
  ];
  return (
    <div style={{ marginLeft: 30 }}>
      <h2>Users List</h2>
      {userData.map((item) => (
        <div>
          <h4>
            {" "}
            <Link to={"/users/"+item.id}>{item.name}</Link>{" "}
          </h4>
        </div>
      ))}

      <hr />
      <h2>Users List With Name</h2>
      {userData.map((item) => (
        <div>
          <h4>
            {" "}
            <Link to={"/users/"+item.id+"/"+item.name}>{item.name}</Link>{" "}
          </h4>
        </div>
      ))}
    </div>
  );
}
