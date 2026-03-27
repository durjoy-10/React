function Students({ names, age , userobject,userarray}) {
// Here names, age , userobject,userarray are props that we are passing from App.jsx. We can use these props to display the data in our component.
    return (
        <div>
            <h1>Students: </h1>
            <p>Names: {names}</p>
            <p>Ages: {age}</p>
            <br /><br /><br />

            <h1>Students from Object: </h1>
            <p>Name: {userobject.name}</p>
            <p>Age: {userobject.age}</p>
            <p>City: {userobject.city}</p>
            <br /><br /><br />

            <h1>Students from Array: </h1>
            <p>Name: {userarray[0]}</p>
            <p>Age: {userarray[1]}</p>
            <p>City: {userarray[2]}</p>
        </div>
    )

}

export default Students;