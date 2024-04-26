import { useEffect, useState } from "react";

const StateComponent = () => {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("====================================");
    console.log("movies");
    console.log("====================================");
  },[]);
  useEffect(() => {
    console.log("====================================");
    console.log("user");
    console.log("====================================");
  },[state]);
  useEffect(() => {
    console.log("====================================");
    console.log("count");
  },[count]);


  useEffect(()=>{
    console.log('abc');

    return()=>{ // clean up code

    }

  },[])

function countChange() {
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1) // working

setCount(prev=>prev+1)

setCount(prev=>prev+1)
setCount(prev=>prev+1)
setCount(prev=>prev+1)
setCount(prev=>prev+1)
    
}
  let changeName = () => {
    // setState(!state);
  };

  return (
    <div>
      <h1>useState Hook</h1>
      <h3>My name is {state===false ? "teja" :"silver"}</h3>
      <h3>My count {count}</h3>
      <button onClick={changeName}>change name</button>
      <button onClick={countChange}>count</button>
    </div>
  );
};

export default StateComponent;
