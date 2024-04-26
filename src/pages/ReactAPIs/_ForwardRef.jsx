import React, { useEffect, useRef, useState } from "react";
import InputField from "../../components/InputField";

const _ForwardRef = () => {
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");
  let inputRef = useRef();

  const handleInput = () => {
    const Cell_RegExp = /^\d{10}$/;
    const cell_check = Cell_RegExp.test(input);
    if (input == "") {
      setErr("please fill input");
    } else if (!cell_check) {
      setErr("please enter valid 'Phone Number'");
    } else {
      setErr("");
      alert(`
       cell: ${input}`);
    }
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {  // comment this if you un comment button below which is commented and in child component also uncomment the useImperative handle hook
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>input val : {input}</h1>
      <InputField
        ref={inputRef}
        label="cell"
        onChange={onInputChange}
        error_message={err}
        value={input}
        input_type={"text"}
      />
      <br />
      <button onClick={handleInput}>click</button>
      {/* <button onClick={()=>inputRef.current.alertFunc()} >alert</button> */}
    </div>
  );
};

export default _ForwardRef;
