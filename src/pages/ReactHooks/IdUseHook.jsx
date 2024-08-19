import { useId } from "react";

const IdUseHook = () => {
  const ueserNameID = useId();
  const cellID = useId();
  const emailID = useId();

  return (
    <div>
      <div>
        <h1>useId Hook</h1>
        <label htmlFor={ueserNameID}></label>
        <input
          type="text"
          id={ueserNameID}
          placeholder={`Generated id --> ${ueserNameID}`}
        />
        <label htmlFor={cellID}></label>
        <input
          type="text"
          id={cellID}
          placeholder={`Generated id --> ${cellID}`}
        />
        <label htmlFor={emailID}></label>
        <input
          type="text"
          id={emailID}
          placeholder={`Generated id --> ${emailID}`}
        />
      </div>
      <br /> <br /> <br />
      <div>
        <span>Notes: </span>
        <p style={{ width: "1000px" }}>
          The "useId" hook in React is used to generate unique IDs for
          components, which can be especially useful when you need to associate
          labels and inputs in forms or when you need to ensure unique keys in a
          list. This hook helps to avoid potential conflicts or duplicate IDs
          when components are rendered multiple times.
        </p>
        <span> In this example:</span>
        <p>* useId generates a unique ID.</p>
        <p>
          * The id is used for both the label and the input, ensuring they are
          correctly associated.
        </p>
        <span> Benefits</span>
        <p>
          Unique IDs: Ensures unique IDs are generated for each instance of the
          component.
        </p>
        <p>
          Accessibility: Helps in associating form labels with their
          corresponding inputs, enhancing accessibility.
        </p>
        <p>
          Avoids Conflicts: Prevents ID conflicts when components are rendered
          multiple times or dynamically.
        </p>
        <p>Don't use it for map method for unique key</p>
        <span>Summary</span>
        <p>The useId hook is a simple yet powerful tool in React for generating unique IDs, ensuring components have consistent and conflict-free identifiers. This is particularly useful for form elements and improving accessibility by correctly associating labels with inputs.</p>
      </div>
    </div>
  );
};

export default IdUseHook;
