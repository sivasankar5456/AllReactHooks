import React, { useMemo, useState } from "react";

const _useMemo = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  const isEven = useMemo(() => {
    // try it without using useMemo hook to see the difference by invoking isEven function
    for (let i = 0; i < 300000090; i++) {}
    return count % 2 == 0;
  }, [count]);

  return (
    <div>
      <h1>
        count : {count} .......... {isEven ? `Even Number` : `Odd Number`}
      </h1>
      <button onClick={() => setCount(count + 1)}>upadet count</button>
      <h1>Age : {age}</h1>
      <button onClick={() => setAge(age + 5)}>upadet age</button>
        <h1>useMemo</h1>
      <p>
        <span style={{ color: "green" }}>Notes : </span>
        * useMemo is a hook which is used to improve the performance of applicatlion. <br />
        * useMemo avoids unnecssary execution of the function when the component is re-ndered <br />
        * useMemo returns a memoized value.
        * useMem accepts two arugments where the : <br />
         1. call back funtion <br />
         2. dependency array <br />
        * useMemo will be executed only when there is a change in dependency.
      </p>
    </div>
  );
};

export default _useMemo;
