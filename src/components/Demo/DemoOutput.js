import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is new and from a component!!" : ""}</p>;
};

export default React.memo(DemoOutput);
//only if props changed the component is reevaluated >>>>memo
//double edge sword << is the component so detrimental to the apps performance that would justify
// <<<<< memo >>>>>
//thus < React.memo(component) > has a higher value to the user higher up on the component tree
//like between different pages/branches where < React.memo(component) > can possibly prevent the
//reloading of the branch/page and all its children.
//triggered by state changes
