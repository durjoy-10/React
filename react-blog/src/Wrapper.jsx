function Wrapper({ children,color }) {
  return (
    <div style={{color: "red", border:"5px solid green",width:"300px",margin:"5px"}}>
        {children}
    </div>
  )
}

export default Wrapper;