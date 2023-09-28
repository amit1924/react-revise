// //Mounting Phase

// import React ,{useState,useEffect} from 'react';

//  function MyComponent(){
//     const[count,setCount] =useState(0)

//     useEffect(()=>{
//         console.log('Component is mounted')
//         return ()=>{
//   console.log('Component is unmounted')
//         }
// },[])

// return (
//     <div>
//         <p>
//             Count:{count}
//         </p>
//         <button onClick={()=>{
//             setCount(count+1)
//         }}>Increment</button>
//     </div>
// )
// }

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // This code runs after every render (including the initial render)
//     console.log('Component is re-rendered');

//     // Cleanup code (runs before the next render or unmount)
//     return () => {
//       console.log('Cleanup before re-render or unmount');
//     };
//   }, [count]); // Run whenever 'count' changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

//Unmounting Phase
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [showComponent, setShowComponent] = useState(true);

//   return (
//     <div>
//       {showComponent ? (
//         <ChildComponent />
//       ) : (
//         <p>Component is unmounted</p>
//       )}
//       <button onClick={() => setShowComponent(false)}>Unmount</button>
//     </div>
//   );
// }

// function ChildComponent() {
//   useEffect(() => {
//     // This code runs when the component is mounted
//     console.log("Mounted after loading")
//     return () => {
//       // Cleanup code (runs before unmount)
//       console.log('Child component is unmounted');
//     };
//   }, []);

//   return <p>Child Component</p>;
// }

//Error Component
import { useState } from "react";

function MyComponent() {
  // Define a state variable 'errorCondition' and a function to update it 'setErrorCondition'
  const [errorCondition, setErrorCondition] = useState(false);
  console.log(errorCondition)

  return (
    <div>
      <button
        onClick={() => {
          // When the button is clicked, set 'errorCondition' to true
          setErrorCondition(true);
          console.log(errorCondition);
        }}
      >
        Throw Error
      </button>
      {errorCondition ? (
        // If 'errorCondition' is true, render 'ChildComponent' wrapped in 'ErrorBoundary'
        <ErrorBoundary>
          <ChildComponent />
        </ErrorBoundary>
      ) : (
        // If 'errorCondition' is false, render 'ChildComponent'
        <ChildComponent />
      )}
    </div>
  );
}

function ChildComponent() {
  return <p>Child Component</p>;
}

function ErrorBoundary({ children }) {
  // Define a state variable 'hasError' and a function to update it 'setHasError'
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // If 'hasError' is true, display an error message
    return <div>Something went wrong.</div>;
  }

  // If 'hasError' is false, render the children (wrapped components)
  return children;
}

export default MyComponent;

