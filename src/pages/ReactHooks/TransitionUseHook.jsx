import React, { useState } from "react";
import WithoutTransionHook from "../../components/WithoutTransionHook";
import WithTransionHook from "../../components/WithTransionHook";

const TransitionUseHook = () => {
  const [isTranstiion, setIsTranstiion] = useState(false);

  return (
    <div>
         <p style={{color:'crimson'}} >useTransion Hook will speed up your application if it is running slow</p>
      <button onClick={() => setIsTranstiion(!isTranstiion)}> 
        {isTranstiion
          ? "go to without useTransion hook"
          : "go to with useTransion hook"}
      </button>
      <br /> <br />
      {isTranstiion ? <WithTransionHook /> : <WithoutTransionHook />}
      <p>Note: carful with useTransion hook it will renders two states superately it will casue too many renders use it only when its needed. <br />
        normally two states rendered same time but with this transition hook it will give input value <br />
         immedeatly by rendering input state and list state is rendered later so it cause two superate  renders. it may leads to too many renders
      </p>
    </div>
  );
};

export default TransitionUseHook;
