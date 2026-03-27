import {useFormStatus} from "react-dom";

function UseFormStatus() {


  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
  };


  function CustomerForm(){
    const {pending,data,method} =useFormStatus();
    console.log(pending,data,method);
    
    return(
      <div>
        <input type="text" placeholder="Enter Name" />
      <br />
      <br />
      <input type="text" placeholder="Enter Password" />
      <br />
      <br />
      <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

      </div>
    )
  }

  return (
    <div>
      <h1 className="heading">Use Form Status Hook</h1>
      <br />
      <br />
      <form action={handleSubmit} method="post">
      <CustomerForm />
      </form>
    </div>
  );
}

export default UseFormStatus;
