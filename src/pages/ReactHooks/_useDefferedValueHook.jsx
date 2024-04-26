import React, { useState } from "react";
import Without_useDefferedValue from "../../components/Without_useDefferedValue";
import With_useDefferedValue from "../../components/With_useDefferedValue";

const _useDefferedValueHook = () => {
  const [input, setInput] = useState("");
  const [isDefferedComponent, setIsDefferedComponent] = useState(false);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// example of debounce function use processChange function in input to check how it work
  // function debounce(func, timeout = 1000){
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
  //   };
  // }
  // function saveInput(){
  //   console.log('Saving data');
  // }
  // const processChange = debounce(() => saveInput());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h1>useDefferedValue Hook</h1>
      <p style={{ color: "crimson" }}>
        useDeferredValue Hook will work like debounce function of javascript in certain use it will speed up your application <br /> 
        and and dont cause too many renders like useTransition hook
      </p>

      {isDefferedComponent ? (
        <h1 style={{ color: 'crimson' }} >With use of useDefferedValue Hook</h1>
      ) : (
        <h1 style={{ color: 'crimson' }} >Without use of useDefferedValue Hook</h1>
      )}

      enter name : <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> <br /><br /><br />
      <button onClick={() => setIsDefferedComponent(!isDefferedComponent)}>
        {isDefferedComponent
          ? "go to without useDeferredValue hook"
          : "go to with useDeferredValue hook"}
      </button>
      <br /> <br />

      {isDefferedComponent ? (
        <With_useDefferedValue input={input} />
      ) : (
        <Without_useDefferedValue input={input} />
      )}
      <p>Note : it will look like use transion hook but it works defferently in useTransition hook <br /> 
      it will give importance to the certian code and run it immediately and give response balance code <br /> 
      will go transition and run in background and give result. <br /> <br /> 
      * but in useDefferedValue hook it will give importance to the certian code and run it immediately <br /> 
      and give responce then dieffered value will be delayed until user stops typing, then quickly dereffered value will updated. <br /> 
      with use of useMemo hook and passing deffered value as dependency it will work like debounce function of js</p>
    </div>
  );
};

export default _useDefferedValueHook;


/*
function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
 debounce(() => saveInput());

//////////////////////////////////////////// simplified debounce funtion ///////////////////////////////////////////////////////

// const print = () => {
//   console.log("prinitng");
// };

// const debounce = (func, timeout) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func()
//     //    func().apply(this, args);
//     }, timeout);
//   };
// };

// const processChange = debounce(print, 300);




*/