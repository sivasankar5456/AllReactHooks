import React, { useState } from "react";

function CountHOC(OriginalComponent, countValue) {
    // console.log(OriginalComponent)
  function NewComponent() {
    const [count, setCount] = useState(0);
    const updateCount = () => {
      setCount(count + countValue);
    };
    return <OriginalComponent myCount={count} updateCount={updateCount} />;
  }
  return NewComponent ;
/*
* A HIGHER ORDER COMPONENT (HOC ) is an advanced techinique in React for reusing component logic.
* HOC is a pure function with zero side-effects and doesn't modify the input component.

* HOC is used to share components logic to different components and avoid repitation of the components logic.
* HOC is a function which accepts component and returns new component.

*/

}

export default CountHOC;
