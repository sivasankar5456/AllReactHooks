import React, { useEffect, useRef, useState } from "react";
import InputField from "../../components/InputField";

const RefHook = () => {
  const inputRefs = useRef([]);
  const [formdetails, setFormdetails] = useState({
    Name: "",
    Cell: "",
    Email: "",
  });
  const [err, setErr] = useState({
    Name: "",
    Cell: "",
    Email: "",
  });

  const { Name, Cell, Email } = formdetails;

  const handelChange = (e) => {
    const {
      target: { name, value },
    } = e;
    // e.preventDefault()
    validateField(name, value);
    setFormdetails({ ...formdetails, [name]: value });
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      if (index < inputRefs.current.length - 1) {
        e.preventDefault();
        /* calling prevent default here is important,
         because it will prevent default form submission on enter key and jump to next input field 
         but when reached last input field on enter form will submit because prevent default called inside if condition
         so here if condition don't work on last input field
       */
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "Name":
        errorMessage = value.trim() ? "" : "this field is required";
        break;
      case "Cell":
        const cellRegEx = /^\d{10}$/;
        errorMessage =
          value.trim() == ""
            ? "this field is required"
            : cellRegEx.test(value)
            ? ""
            : "please Enter valid Number";
        break;
      case "Email":
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errorMessage =
          value.trim() == ""
            ? "this field is required"
            : emailRegEx.test(value)
            ? ""
            : "please Enter valid Email address";
        break;

      default:
        break;
    }
    setErr((prev) => {
      return {
        ...prev,
        [name]: errorMessage,
      };
    });
  };

  const validateAllFields = () => {
    for (const [name, value] of Object.entries(formdetails)) {
      validateField(name, value);
    }
  };

  const isFormValid = () => {
    // Check if there are any errors
    return Object.values(err).every((error) => error === "");
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    validateAllFields();

    if ((Name !== "" || Cell !== "" || Email !== "") && isFormValid()) {
      console.log("Form submitted with data :", formdetails);
      // Further processing...
    } else {
      console.log("Form submission aborted due to validation errors");
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);
  return (
    <div>
      <h1>useRef Hook</h1>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <InputField
          ref={(el) => (inputRefs.current[0] = el)}
          input_type="text"
          name={"Name"}
          value={Name}
          onChange={(e) => handelChange(e)}
          onKeyDown={(e) => handleKeyPress(e, 0)}
          label="Enter Name"
          error_message={err.Name}
          label_class_name=""
        />
        <InputField
          ref={(el) => (inputRefs.current[1] = el)}
          input_type="tel"
          name={"Cell"}
          value={Cell}
          onChange={(e) => handelChange(e)}
          onKeyDown={(e) => handleKeyPress(e, 1)}
          label="Enter cell"
          error_message={err.Cell}
          label_class_name=""
        />
        <InputField
          ref={(el) => (inputRefs.current[2] = el)}
          input_type="text"
          name={"Email"}
          value={Email}
          onChange={(e) => handelChange(e)}
          onKeyDown={(e) => handleKeyPress(e, 2)}
          label="Enter Email"
          error_message={err.Email}
          label_class_name=""
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default RefHook;

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// // Expected output:
// // "a: somestring"
// // "b: 42"
