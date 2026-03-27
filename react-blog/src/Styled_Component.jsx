import styled from "styled-components";

// Install styled-components: npm install styled-components

// Technique 1: Using Object Notation
const Heading = styled.h1({
    color: "red",
    fontSize: "50px",
    textAlign: "center"
})

// Technique 2: Using Template Literals
const paragraph = styled.p`
    color: green;
    font-size: 20px;
    text-align: center;
`;

const StyleBtn=styled.button`
color:red;
width:130px;
height:40px;
margin:20px
`


function Styled_Component() {
    return (
        <div>
            <Heading>Styled Component</Heading>
            <paragraph>This is a styled component example.</paragraph> <br />

            <StyleBtn>Click Me</StyleBtn>
            <StyleBtn>Submit</StyleBtn>
            <StyleBtn>Cancel</StyleBtn> 
            <StyleBtn>Login</StyleBtn>
            <StyleBtn>Logout</StyleBtn>
        </div>

    );
}

export default Styled_Component;