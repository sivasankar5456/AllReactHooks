import React from "react";

const CallBackCount = ({ MyValue, text }) => {
  console.log(`${text} rendered`);
  return (
    <div>
      <h1>
        {text} : {MyValue}
      </h1>
    </div>
  );
};

export default React.memo(CallBackCount);
