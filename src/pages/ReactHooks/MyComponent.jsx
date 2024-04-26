import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const focusNextInput = (currentInputRef) => {
    // Determine which input is currently focused
    if (currentInputRef === input1Ref) {
      input2Ref.current.focus(); // Focus on the second input field
    } else if (currentInputRef === input2Ref) {
      // You can continue this pattern for more input fields
      // For example:
      // input3Ref.current.focus();
    }
  };

  const handleKeyPress = (e, currentInputRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      focusNextInput(currentInputRef);
    }
  };

useEffect(()=>{
    input1Ref.current.focus();
},[])

  return (
    <div>
      <input
        ref={input1Ref}
        type="text"
        onKeyDown={(e) => handleKeyPress(e, input1Ref)}
      />
      <input
        ref={input2Ref}
        type="text"
        onKeyDown={(e) => handleKeyPress(e, input2Ref)}
      />
      {/* Add more input fields as needed */}
    </div>
  );
}

export default MyComponent;






// function MyComponent() {
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     // Focus the first input field when the component mounts
//     inputRefs.current[0].focus();
//   }, []);

//   const handleKeyPress = (index, e) => {
//     // Move focus to the next input field when Enter is pressed
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       if (index < inputRefs.current.length - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   return (
//     <div>
//       <input
//         ref={(el) => (inputRefs.current[0] = el)}
//         type="text"
//         onKeyDown={(e) => handleKeyPress(0, e)}
//       />
//       <input
//         ref={(el) => (inputRefs.current[1] = el)}
//         type="text"
//         onKeyDown={(e) => handleKeyPress(1, e)}
//       />
//       {/* Add more input fields as needed */}
//     </div>
//   );
// }

// export default MyComponent;
