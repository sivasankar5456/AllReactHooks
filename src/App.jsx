import "./App.css";
import StateComponent from "./pages/ReactHooks/StateComponent";
import ReducerHook from "./pages/ReactHooks/ReducerHook";
import RefHook from "./pages/ReactHooks/RefHook";
import ReactMemo from "./pages/ReactAPIs/ReactMemo";
import _useMemo from "./pages/ReactHooks/_useMemo";
import _useCallBack from "./pages/ReactHooks/_useCallBack";
import IdUseHook from "./pages/ReactHooks/IdUseHook";
import TransitionUseHook from "./pages/ReactHooks/TransitionUseHook";
import _useDefferedValueHook from "./pages/ReactHooks/_useDefferedValueHook";
import _ForwardRef from "./pages/ReactAPIs/_ForwardRef";
import _useImperativeHandle from "./pages/ReactHooks/_useImperativeHandle";
import FormValidationChatGpt from "./pages/ReactHooks/FormValidationChatGpt";
import _useLayoutEffect from "./pages/ReactHooks/_useLayoutEffect";
import MyComponent from "./pages/ReactHooks/MyComponent";
import Togglecomponent from "./pages/ReactHooks/Togglecomponent";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import HorizontalScroll from "./components/HorizontalScroll";
// import FormValidationChatGpt from "./pages/ReactHooks/FormValidationChatGpt";
import WelcomeComp from "./ClassComponents/WelcomeComp";
import CreatePortalComp from "./pages/ReactDomAPIs/CreatePortalComp";
import LazyLoading from "./pages/ReactAPIs/LazyLoading";
import ErrorBoundary from "./pages/concepts/ErrorBoundary";
import CountA from "./pages/concepts/CountA";


let linksArray = [
  { title: "StateComponent", component: <StateComponent /> },
  { title: "ReducerHook", component: <ReducerHook /> },
  { title: "RefHook", component: <RefHook /> },
  { title: "_ForwardRef", component: <_ForwardRef /> },
  { title: "ReactMemo", component: <ReactMemo /> },
  { title: "_useMemo", component: <_useMemo /> },
  { title: "_useCallBack", component: <_useCallBack /> },
  { title: "IdUseHook", component: <IdUseHook /> },
  { title: "TransitionUseHook", component: <TransitionUseHook /> },
  { title: "_useDefferedValueHook", component: <_useDefferedValueHook /> },
  { title: "_useImperativeHandle", component: <_useImperativeHandle /> },
  { title: "_useLayoutEffect", component: <_useLayoutEffect /> },
  { title: "FormValidationChatGpt", component: <FormValidationChatGpt /> },
  { title: "AutoFocusInputWithRef", component: <MyComponent /> },
  { title: "ClassComponents", component: <WelcomeComp /> },
];
function App() {
  return (
    <div className="card">
      <ErrorBoundary>
      {/* <StateComponent /> */}
      {/* <ReducerHook/> */}
      {/* <RefHook/> */}
      {/* <_useMemo /> */}
      {/* <_useCallBack /> */}
      {/* <IdUseHook/> */}
      {/* <TransitionUseHook/> */}
      {/* <_useDefferedValueHook/> */}
      {/* <_useImperativeHandle /> */}
      {/* <_useLayoutEffect /> */}
      {/* <MyComponent/> */}
      {/* <FormValidationChatGpt /> */}
       
      {/* React APIs */}
      {/* <_ForwardRef/> */}
      {/* <ReactMemo /> */}
      {/* <LazyLoading /> */}

      {/* ReactDOM APIs */}
      <CreatePortalComp />

      {/* class components */}
      {/* <WelcomeComp /> */}

      {/* concepts */}
      {/* // Hoc */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* // ErrorBoundary */}
        {/* <CountA /> */}

      {/* <Togglecomponent linksArray={linksArray} /> */}
      {/* // inifinite scroll */}
      {/* <HorizontalScroll /> */}
      </ErrorBoundary>
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
