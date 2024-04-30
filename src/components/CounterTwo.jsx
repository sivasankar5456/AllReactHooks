import React from "react";
import CountHOC from "../pages/concepts/CountHOC";

const CounterTwo = ({ myCount, updateCount }) => {
//   console.log(myCount);
  return (
    <div>
      <h1>count two : {myCount}</h1>
      <button onClick={updateCount}>updateCount</button>
    </div>
  );
};

export default CountHOC(CounterTwo,5)
