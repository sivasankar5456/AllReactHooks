import React from "react";

const MemoStd = ({ age }) => {
  console.log(`student rendered`);

  return (
    <div>
      <h1>student Age :{age}</h1>
    </div>
  );
};

export default  React.memo(MemoStd); // try without using React.memo and check the console you check the difference
