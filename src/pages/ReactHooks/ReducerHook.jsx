// //02) advanced example of useReducer hook

import { useReducer, useRef } from "react";
const initialstate = [
  {
    id: 1,
    task: "watch movie",
    status: "incomplete",
  },
  {
    id: 2,
    task: "watch youtube",
    status: "incomplete",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // 1
      // return [...state];
      // or
      // 2
      return [...state, action.payload];

    case "COMPLETE_TASK":
       // 1
      // return [...state];

      // or

      // 2
      state?.forEach((item) => {
        if (item.id == action.payload) {
          item.status = "complete";
        }
      });

      return [...state];

    case "DELETE_TASK":
      const deleteTask = state?.filter((item) => item.id != action.payload);
      return deleteTask;

    default:
      return state;
  }
};

const ReducerHook = () => {
 
  const [state, dispatchs] = useReducer(reducer, initialstate); // here instead of dispatch we have given dispatchs it will work but actually we always give dispatch
  const inputRef = useRef("");

  const handleAddTask = (e) => {
    // console.log(inputRef.current.value)
    e.preventDefault();

    // // 1
    
    // state.push({
    //   id: state.length + 1,
    //   task: inputRef.current.value,
    //   status:'incomplete'
    // });
    // dispatchs({ type: "ADD_TASK" });
    // inputRef.current.value=""

    // or

    // // 2
    dispatchs({
      type: "ADD_TASK",
      payload: {
        id: state.length + 1,
        task: inputRef.current.value,
        status: "incomplete",
      },
    });
    inputRef.current.value = "";
  };

  const handleUpadateStatus = (index, id) => {

    // // 1
    // state[index].status = "complete"
    // dispatchs({ type: "COMPLETE_TASK" });

    // or
    // 2
    dispatchs({ type: "COMPLETE_TASK", payload: id });
  };
  //   console.log(state);
  return (
    <div className="reuducer-component">
      <h1>useReducer Hook</h1>
      <form onSubmit={handleAddTask}>
        <span className="">Enter task: </span>
        <input type="text" ref={inputRef} />
        <button type="submit">Add task</button>
      </form>
      <div className="display-tasks">
        {state?.map((item, index) => {
          return (
            <div key={`task_key_${item.id}`} className="task-card">
              <div className="text-wrapper">
                <div>
                  <label>Task : </label> <br />
                  <label>Status : </label>
                </div>
                <div>
                  <span style={{ color: "white" }}>{item.task}</span>
                  <br />
                  <span style={{ color: "white" }}>{item.status}</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUpadateStatus(index, item.id)}
                  style={{ backgroundColor: "blue", marginRight: "10px" }}
                >
                  complete task
                </button>
                <button
                  onClick={() =>
                    dispatchs({ type: "DELETE_TASK", payload: item.id })
                  }
                  style={{ backgroundColor: "crimson" }}
                >
                  delete task
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReducerHook;

// Basic example of useReducer hook

// import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { count: state.count - 1 };

//     default:
//       throw new Error("unknow action occured");
//   }
// };

// const ReducerHook = () => {
//   const initialstate = { count: 0 };

//   const [state, dispatch] = useReducer(reducer, initialstate);

//   return (
//     <div>
//       <p>count : {state.count}</p>

//       <button onClick={() => dispatch({ type: "increment" })}>increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
//     </div>
//   );
// };

// export default ReducerHook;
