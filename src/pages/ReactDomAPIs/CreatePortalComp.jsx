import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// you can create each file for each component and use it via imports
const ModalContent = () => {
  const modalStyle = {
    // position: 'fixed',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, 0%)',
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    color: "black",
  };
  return (
    <div style={modalStyle} className="createPortal-Modal">
      <h3>this is modal content from createPortal ReactDom API</h3>
    </div>
  );
};

const Modal = () => {
  return ReactDOM.createPortal(<ModalContent />, document.body);
};

const CreatePortalComp = () => {
  let throwError = () => {
    throw new Error("app crashed from Create portal");
  };
  useEffect(() => {
    // throwError();
  }, []);
  return (
    <div>
      <Modal />
      <h1 style={{ margin: 0 }}>Welcome to Create Portal</h1>
      <p>Go to the browser console check the Model where it is coming from</p>
      <span style={{ color: "green", fontWeight: "bold", margin: 0 }}>
        Notes:
      </span>
      <p style={{ margin: 0 }}>
        React portals are used for tooltips,modals like conentet for particular
        component should be placed at particular place instaed of where its used
      </p>
      <p>
        You can open console check the element it is shown in body of this html
        page not at the CreatePortalComp even though we have called it in
        CreatePortalComp but in browser it is called in body tag.
      </p>
      <p>{`ReactDOM.createPortal: The createPortal method takes two arguments: the JSX you want to render (children) and the DOM node where you want to render it (portalRoot). This allows the modal to be rendered outside of the main DOM hierarchy but still managed by React.`}</p>
      <span style={{ color: "red", fontWeight: "bold", margin: 0 }}>
        example
      </span>
      <p style={{ margin: 0 }}>
        {`const Modal = () => {
    return ReactDOM.createPortal(<ModalContent />, document.body);`}
      </p>
      <p style={{ marginBottom: "10px", marginTop: 0 }}>
        {`ReactDOM.createPortal(The elments takes place here, The id of the tag where you wanted to show the content);
  };`}
      </p>
      <p style={{ margin: 0 }}>{`
    Parameters 
    children: Anything that can be rendered with React, such as a piece of JSX (e.g. <div /> or <SomeComponent />), a Fragment (<>...</>), a string or a number, or an array of these.`}</p>
      <p
        style={{ margin: 0 }}
      >{`domNode: Some DOM node, such as those returned by document.getElementById(). The node must already exist. Passing a different DOM node during an update will cause the portal content to be recreated.`}</p>
      <p
        style={{ margin: 0 }}
      >{` optional key: A unique string or number to be used as the portal’s key.`}</p>
      <span>Note:</span> <br />
      <p
        style={{ marginBottom: "10px", marginTop: 0 }}
      >{`Events from portals propagate according to the React tree rather than the DOM tree. For example, if you click inside a portal, and the portal is wrapped in <div onClick>, that onClick handler will fire. If this causes issues, either stop the event propagation from inside the portal, or move the portal itself up in the React tree.`}</p>
    </div>
  );
};

export default CreatePortalComp;
