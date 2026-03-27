function CurlyBraces() {

    const name = "durjoy";
    let path= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6hLctxK6SSvedMewT2jmPhvFPzRWQWDW3Vg&s";
    let x=10;
    let y=20;

    function fruit(){
        return "apple";
    }

    function opp(a,b,opperator){
        if (opperator =="+"){
            return a+b;
        }
        else if (opperator =="-"){
            return a-b;
        }
        else if (opperator =="*"){
            return a*b;
        }
        else if (opperator =="/"){
            return a/b;
        }   
        else{
            return "Invalid opperator";
        }

    }

    //Using Objects
    const userObject = {
        name: "durjoy",
        mail: "durjoy@example.com",
        phone: "01712345678",
        age: 25,
        city: "barishal"
    }

    const userArray =["john","john@example.com","01712345679", 30,"dhaka"];

    return (
        <div>
            <h1>Curly Braces in JSX</h1>
            <h2>{name?name:"Name not provided"}</h2>
            <br />

            <h2>{x+y}</h2>
            <br />

            <h2>Fruit: {fruit()}</h2>
            <br />

            <h2>Addition Result: {opp(10,20,"+")}</h2>
            <h2>Subtraction Result: {opp(10,20,"-")}</h2>
            <h2>Multiplication Result: {opp(10,20,"*")}</h2>
            <h2>Division Result: {opp(10,20,"/")}</h2> 
            <br />

            <h2>User Object:</h2>
            <p>Name: {userObject.name}</p>
            <p>Email: {userObject.mail}</p>
            <p>Phone: {userObject.phone}</p>
            <p>Age: {userObject.age}</p>
            <p>City: {userObject.city}</p>
            <br />

            <h2>User Array:</h2>
            <p>Name: {userArray[0]}</p>
            <p>Email: {userArray[1]}</p>
            <p>Phone: {userArray[2]}</p>
            <p>Age: {userArray[3]}</p>
            <p>City: {userArray[4]}</p>
            <br />


            <input type="text" placeholder="Enter your name" value={name} id={name}/>
            <br />
            <img src={path} alt="Image from variable" className="photo" />

            
        </div>
    )
}

export default CurlyBraces;