import React, { useState, useCallback } from "react";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); //array of dependancies, if they change the function will be re-created

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle </Button>
    </div>
  );
}

export default App;

//useCallback saves a function/object and tells react to not re-execute it every time.
//React.memo is more efficient
//it will call the exact same function
//functional state changes is recommended when you depend on the prevState
//state changes happens in batches of multiple items

//useMemo is a state that can be used to store data in a function return statement
//a dependance is required that will re-render the memo call
// to prevent unnecessary state updates need to twin-cast useMemo
//on both the initial array and the reference to that array
//useful to avoid unnecessary sorting of items
