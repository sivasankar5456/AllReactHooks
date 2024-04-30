import React from "react";
import CountHOC from "../pages/concepts/CountHOC";


const CounterOne = ({ myCount, updateCount }) => {
//   console.log(myCount);
  return (
    <div>
      <h1>count one : {myCount}</h1>
      <button onClick={updateCount}>updateCount</button>
    </div>
  );
};

export default CountHOC(CounterOne,3)
