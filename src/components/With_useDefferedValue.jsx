import { useDeferredValue, useEffect, useMemo } from "react";

const With_useDefferedValue = ({ input }) => {
  const LIST_SIZE = 20000;
  const defferedInputValue = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defferedInputValue}</div>);
    }

    return l;
  }, [defferedInputValue]);

  useEffect(() => {
    console.log(`input value : ${input} \ndefferedValue: ${defferedInputValue} `)
  }, [input,defferedInputValue])

  return list;
};

export default With_useDefferedValue;
