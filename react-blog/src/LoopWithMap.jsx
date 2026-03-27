import User from "./User";
function LoopWithMap() {
  const userData = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
    { id: 4, name: "David", email: "david@example.com", age: 40 },
    { id: 5, name: "Eve", email: "eve@example.com", age: 35 },
  ];

  return (
    <div>
      <h1>User Data:</h1>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                {" "}
                {/* key helps React track each row */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>

      </table>

      <h1>Reuse component in LoopWithMap</h1>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}

    </div>
    
  );
}

export default LoopWithMap;
