function NestedLoop() {

    const collegeData = [
        {
            name: "ABC College",
            city: "Dhaka",
            mail: "abc@college.com",
            students: [
                { id: 1, name: "Alice", age: 20 },
                { id: 2, name: "Bob", age: 22 },
            ],
        },
        {
            name: "XYZ University",
            city: "Barishal",
            mail: "xyz@university.com",
            students: [
                { id: 3, name: "Charlie", age: 21 },
                { id: 4, name: "David", age: 23 },
            ],
        },
        {
            name: "PQR Institute",
            city: "Chittagong",
            mail: "pqr@institute.com",
            students: [
                { id: 5, name: "Eve", age: 20 },
                { id: 6, name: "Frank", age: 22 },
            ],
        }
    ];

    return (
        <div>
            <h1>Nested Loop</h1>
            {collegeData.map((college, index) => {
                return (
                    <div key={index} style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
                        <h2>College Name: {college.name}</h2>
                        <h3>City: {college.city}</h3>
                        <h3>Email: {college.mail}</h3>
                        <h4>Students:</h4>
                        <ul>
                            {college.students.map((student) => {
                                return (
                                    <li key={student.id}>
                                        {student.name} - Age: {student.age}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    )


}

export default NestedLoop;