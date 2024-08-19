import React, { useId } from "react";
// this is forwardRef component
const InputField = (props, ref) => {
  const inputID = useId();  // useID hook is used here you will know about it later 

  const {
    label = "Enter input",
    error_message = "",
    labelClass_name="",
    input_type = "text",
  } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ textAlign: "right", width: "100px", marginRight: "10px" }}>
        <label htmlFor={inputID} className={labelClass_name}>
          {label}:{" "}
        </label>
      </div>
      <input type={input_type} id={inputID} style={{outline:'0',marginRight:'10px'}} {...props} ref={ref} />
      <p style={{ color: "red" }}>{error_message}</p>
    </div>
  );
};

export default React.forwardRef(InputField);

// import React, { useId } from "react";

// const InputField = (props, ref) => {
//   const inputID = useId();

//   const {
//     label ="Enter input",
//     defaultVal,
//     placeHolderValue="type Something",
//     errorMessage,
//     inputClass_name,
//     labelClass_name,
//     onInputChange,
//     inputType = "text",
//   } = props;

//   return (
//     <div>
//       <label htmlFor={inputID} className={labelClass_name}>
//         {label}:{" "}
//       </label>
//       <input
//         type={inputType}
//         id={inputID}
//         className={inputClass_name}
//         value={defaultVal}
//         onChange={onInputChange}
//         placeholder={placeHolderValue}
//         {...props}
//       />
//       <p style={{ color: "crimson" }}>{errorMessage}</p>
//     </div>
//   );
// };

// export default React.forwardRef(InputField);
