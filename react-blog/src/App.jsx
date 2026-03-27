import Todo from "./Todo";
import Curlybraces from "./JsxWithCurlyBraces";
import ClickEventAndFunctionCall from "./ClickEventAndFunctionCall";
import StateInJs from "./StateInJs";
import Toggle from "./Toggle";
import MultiCondition from "./MultiCondition";
import Students from "./ProcsInReact";
import Wrapper from "./Wrapper";
import InputFieldValue from "./InputFieldValue";
import ControlledComponent from "./ControlledComponent";
import HandleCheckboxes from "./HandleCheckboxes";
import RadioAndDropdown from "./RadioAndDropdown";
import LoopWithMap from "./LoopWithMap";
import NestedLoop from "./NestedLoop";
import Profile from "./InlineStyle";
import External_Css from "./External_Css";
import Css_Modules from "./Css_Modules";
import Styled_Component from "./Styled_Component";
import Bootstrap from "./Bootstrap";
// import UseRefHook from "./UseRefHook";
import Uncontrolled_Component from "./Uncontrolled_Component";
import ForwardRef from "./ForwardRef";
import UseFormStatus from "./UseFormStatus";
import UseTransitionHook from "./UseTransitionHook";
import DerivedState from "./DerivedState";
import LiftingStateUp from "./LiftingStateUp";
import UpdatingObjectsInState from "./UpdatingObjInState";
import UpdateArrayInState from "./UpdateArrayInState";
import UseActionState from "./UseActionState";
import UseIdHook from "./UseIdHook";
import ContextApi from "./ContextApi"



function App() {

    let userobject = {
        name: "John",
        age: 30,
        city: "New York"
    }

    let userarray = ["Peter", 30, "New York"];


    return (
        <div>
            <Todo />
            <br /><br /><br /><hr />

            <Curlybraces />
            <br /><br /><br /><hr />

            <br />
            <ClickEventAndFunctionCall />
            <br /><br /><br /><hr />

            <h1>State In Jsx</h1>
            <StateInJs />
            <br /><br /><br /><hr />

            <Toggle />
            <br /><br /><br /><hr />


            <MultiCondition />
            <br /><br /><br /><hr />


            <h1>Procs in React Js</h1>
            <Students names="John, Jane, Bob" age="20,30,25" userobject={userobject} userarray={userarray}/>
            <br /><br /><br /><hr />


            <h2>Procs in React Js with default procs , pass jsx, change style in with procs</h2>
            <Wrapper style={{color:"revert",border:"5px solid green",width:"300px",margin:"5px"}}>
                <p>This is first content inside the wrapper.</p>
            </Wrapper>
            <Wrapper style={{color:"yellow",border:"5px solid green",width:"300px",margin:"5px"}}>
                <p style={{color:"rosybrown"}}>This is Second content inside the wrapper.</p>
            </Wrapper>
            <Wrapper style={{color:"white",border:"5px solid green",width:"300px",margin:"5px"}}>
                <p style={{color:"seashell"}}>This is Third content inside the wrapper.</p>
            </Wrapper>
            <Wrapper>
                <p style={{color:"royalblue"}}>This is Fourth content inside the wrapper.</p>
            </Wrapper>
            <br /><br /><br /><hr />



            <h1>Input Field Value</h1>
            <InputFieldValue />
            <br /><br /><br /><hr />



            <h1>Controlled Components</h1>
            <ControlledComponent />
            <br /><br /><br /><hr />


            <h1>Handle Checkboxes</h1>
            <HandleCheckboxes />
            <br /><br /><br /><hr />



            <h1>Handle Radio and Dropdown buttons</h1>
            <RadioAndDropdown />
            <br /><br /><br /><hr />


            <h1>Loop with Map</h1>
            <LoopWithMap />
            <br /><br /><br /><hr />


            <NestedLoop />
            <br /><br /><br /><hr />



            <Profile />

            <br /><br /><br /><hr />



            {/* <h1>External Css in React Js</h1> */}
            <External_Css />
            <br /><br /><br /><hr />


            {/* <h1>Style with Css Modules in React Js</h1> */}

            <Css_Modules />
            <br /><br /><br /><hr />



            <Styled_Component />
            <br /><br /><br /><hr />



            <Bootstrap />
            <br /><br /><br /><hr />



            {/* <UseRefHook />
            <br /><br /><br /><hr /> */}

            <Uncontrolled_Component />
            <br /><br /><br /><hr />


            <ForwardRef />
            <br /><br /><br /><hr />


            <UseFormStatus />
            <br /><br /><br /><hr />



            <UseTransitionHook />
            <br /><br /><br /><hr />


            <div>
                <h1 className="heading"> Keep Your Components Pure in React.js </h1> <br />
                <h4>We have to use props to pass data into the function components. We should not use this variable which is used outer of the function like counter variable</h4>
            </div>

            <br /><br /><br /><hr />


            <DerivedState />
            <br /><br /><br /><hr />

            
            <LiftingStateUp />
            <br /><br /><br /><hr />


            <UpdatingObjectsInState />
            <br /><br /><br /><hr />



            <UpdateArrayInState />
            <br /><br /><br /><hr />


            <UseActionState />
            <br /><br /><br /><hr />



            <UseIdHook />
            <br /><br /><br /><hr />


            <ContextApi />
            <br /><br /><br /><hr />



            {/* CustomHooks */}









        </div>

    );
}

export default App;