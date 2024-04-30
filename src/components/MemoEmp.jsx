import React from "react";

const MemoEmp = ({ salary }) => {
  console.log(`employee rendered`);
  return (
    <div>
      <h1>slary : {salary}</h1>
    </div>
  );
};

export default React.memo(MemoEmp); // try without using React.memo and check the console you check the difference
