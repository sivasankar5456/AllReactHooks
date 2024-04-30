import React, { useCallback, useState } from "react";
import CallBackCount from "../../components/CallBackCount";
import CallBackButton from "../../components/CallBackButton";

const _useCallBack = () => {
  const [salary, setSalary] = useState(1500)
  const [age, setAge] = useState(15);

  const updateSalary  = useCallback(() => {
    // try it without using useCallback hook to see the difference.
    setSalary(salary+200);
  }, [salary] )
  const updateAge  = useCallback(() => {
    // try it without using useCallback hook to see the difference.
    setAge(age+3);
  }, [age] )
  console.log('parent rendered')

  return (
    <div>
      <CallBackCount MyValue={salary} text="salary" />
      <CallBackButton click={updateSalary} text="updateSalary" />
      <hr />
      <CallBackCount MyValue={age} text="age" />
      <CallBackButton click={updateAge} text="updateAge" />

        <h1>useCallback</h1>
      <p>
        <span style={{ color: "green" }}>Notes : </span>
        In React js function will be having some reference before rendering and functions <br />
        will be having some diifference reference after rendering  <br /> <br />
        * useCallback is a hook which is used to increase the performance of applicatlion. <br />
        * useCallback returns memoized function <br />
        * useCallback avoids unnecssary execution of the function when the component is re-ndered <br />
        * useCallback accepts two arugments where  the :<br />
        1. call back funtion <br />
        2. dependency array <br />
        * useCallback will be executed only when there is
        a change in dependency.
      </p>
    </div>
  );
};

export default _useCallBack;
