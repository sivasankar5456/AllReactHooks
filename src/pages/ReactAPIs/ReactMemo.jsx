import React, { useState } from "react";
import MemoEmp from "../../components/MemoEmp";
import MemoStd from "../../components/MemoStd";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(15);
  const [salary, setSalary] = useState(100);
  console.log(`parent rendered`);
  // try without using React.memo in child component and check the console you check the difference

  return (
    <div>
      <h1>parent counter {count}</h1>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <MemoEmp salary={salary} />
      <button onClick={() => setSalary(salary + 400)}>update Slary</button>
      <MemoStd age={age} />
      <button onClick={() => setAge(age + 3)}>update Age</button>

      <p>
        <span style={{ color: "green" }}>Notes:</span>
        <h1>Memoization</h1>
        * memozation is a optimization technique which is used to improve
        aplication performace. <br />
        * In rect js we use React.memo & use memo for memoization purpose.
        <br /> <br />
        <span>React.memo : </span> <br />
        * it is used to memoize the component <br />
        * React.memo helps us to avoid unnessasary rendering of the components{" "}
        <br />
        * react.memo check changesonly in props <br />
        * If there no change in props React.meo remembers the previous value of
        prop and check the current value of prop. <br />* react.memo is a built
        in higher order component.
        {`(because it accepts a component & returns component so its a built in High Order Component)`}
      </p>
    </div>
  );
};

export default ReactMemo;
