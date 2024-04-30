import React from "react";

const CallBackButton = ({ click, text }) => {
  console.log(`${text} rendered`);
  return (
    <div>
      <button onClick={click}>{text}</button>
    </div>
  );
};

export default React.memo(CallBackButton);
