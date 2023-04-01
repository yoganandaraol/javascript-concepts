console.log("Currying");

/**
    Currying is a functional programming technique in which 
    a function that takes multiple arguments is transformed into 
    a sequence of functions that each take a single argument. 
    
    In other words, currying is the process of decomposing a function with multiple arguments into 
    a series of functions that each take one argument and 
    return a new function that takes the next argument.
    
    `Currying` is used in react application in/for
        1. Event handling
        2. HOC (Higher Order Components)

 * 
 */

//    Event handlers: 
//          React event handlers are functions that are passed as props to child components. 
//          By currying event handlers, you can create more flexible and reusable event handling functions 
//          that can be used with different components.

//    For example, suppose you have a button component that needs to perform a different action depending on the button label

/**
 * 
 * This code will not run. Just for illustration purpose
 */

function Button(props) {
    return <button onClick={props.onClick}>{props.label}</button>;
  }

// You could define a curried event handler function 
// that takes the button label as an argument and returns a new function 
// that performs the appropriate action:

function handleButtonClick(label) {
    return function(event) {
      if (label === "Save") {
        // Perform save action
      } else if (label === "Cancel") {
        // Perform cancel action
      }
    }
  }
  
  const saveHandler = handleButtonClick("Save");
  const cancelHandler = handleButtonClick("Cancel");
  
  function MyForm() {
    return (
      <div>
        <Button label="Save" onClick={saveHandler} />
        <Button label="Cancel" onClick={cancelHandler} />
      </div>
    );
  }
  