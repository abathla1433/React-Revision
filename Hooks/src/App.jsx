import { useEffect, useState } from "react";
const App=()=>{
  const[num,setNum]=useState(0);

  const click=()=>{
    setNum(num+1);
  }

  useEffect(function(){
    console.log("App is running");
  },[]) 


  return(
    <div>
      <h1>{num}</h1>
      <button onClick={click}>Click</button>
    </div>
  )
}

export default App