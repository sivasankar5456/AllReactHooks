import "./App.css";
import IdUseHook from "./pages/ReactHooks/IdUseHook";
import ReducerHook from "./pages/ReactHooks/ReducerHook";
import RefHook from "./pages/ReactHooks/RefHook";
import TransitionUseHook from "./pages/ReactHooks/TransitionUseHook";
import _useDefferedValueHook from "./pages/ReactHooks/_useDefferedValueHook";
import _useLayoutEffect from "./pages/ReactHooks/_useLayoutEffect";
import _ForwardRef from "./pages/ReactAPIs/_ForwardRef";
import _useImperativeHandle from "./pages/ReactHooks/_useImperativeHandle";
import StateComponent from "./pages/ReactHooks/StateComponent";
import MyComponent from "./pages/ReactHooks/MyComponent";
import FormValidationChatGpt from "./pages/ReactHooks/FormValidationChatGpt";
// import FormValidationChatGpt from "./pages/ReactHooks/FormValidationChatGpt";

function App() {
  return (
    <div className="card">
      {/* <StateComponent /> */}
      {/* <ReducerHook/> */}
      {/* <RefHook/> */}
      {/* <IdUseHook/> */}
      {/* <TransitionUseHook/> */}
      {/* <_useDefferedValueHook/> */}
      {/* <_ForwardRef/> */}
      {/* <_useImperativeHandle /> */}
      {/* <MyComponent/> */}
      {/* <FormValidationChatGpt /> */}
      <RefHook />
      <_useLayoutEffect />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
