// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Form } from "react-bootstrap";
function Bootstrap() {
    return (
        <>
        <div>
            <h1 className="heading">Style Using Bootstrap</h1>
            <Button onClick={()=> alert("Primary button clicked!")} variant="primary">Primary</Button>
            <Button onClick={()=> alert("Secondary button clicked!")} variant="secondary">Secondary</Button>
            <Button onClick={()=> alert("Success button clicked!")} variant="success">Success</Button>
            <Button onClick={()=> alert("Danger button clicked!")} variant="danger">Danger</Button>
            <Button onClick={()=> alert("Warning button clicked!")} variant="warning">Warning</Button>
            <Button onClick={()=> alert("Info button clicked!")} variant="info">Info</Button>
            <Button onClick={()=> alert("Light button clicked!")} variant="light">Light</Button>
            <Button onClick={()=> alert("Dark button clicked!")} variant="dark">Dark</Button>
            <Button onClick={()=> alert("Link button clicked!")} variant="link">Link</Button>
        </div>
        <div>
            <Alert variant="primary">This is a primary alert—check it out!</Alert>
            <Alert variant="secondary">This is a secondary alert—check it out!</Alert>
            <Alert variant="success">This is a success alert—check it out!</Alert>
            <Alert variant="danger">This is a danger alert—check it out!</Alert>
            <Alert variant="warning">This is a warning alert—check it out!</Alert>
            <Alert variant="info">This is an info alert—check it out!</Alert>
            <Alert variant="light">This is a light alert—check it out!</Alert>
            <Alert variant="dark">This is a dark alert—check it out!</Alert>
        </div>
        <div>
            <SelectBasicExample />
        </div>
        </>
    )
}


function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}



export default Bootstrap;