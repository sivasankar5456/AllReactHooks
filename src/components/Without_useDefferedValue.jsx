import { useMemo } from "react";

const Without_useDefferedValue = ({ input }) => {
  const LIST_SIZE = 20000;

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }

    return l;
  }, [input]);

  return list;
};

export default Without_useDefferedValue;
