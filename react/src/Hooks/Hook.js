// import React from 'react';
// import { useState ,useEffect} from 'react'

// const Hook = () => {
//   const [count, setCount] = useState(0);
//   const [toogle, setToogle] = useState(false); // Provide an initial value (e.g., false)

//   function increment() {
//     setCount(count + 1); // Update the count using setCount
//   }

//   function toggleColors() {
//     setToogle(!toogle); // Toggle the value using the current value of toogle
//   }

//   return (
//     <div>
//       {count}

//       <button onClick={increment}>Counting</button>
//       <div>
//         {toogle ? 'Toggled On' : 'Toggled Off'}
//         <button onClick={toggleColors}>Toggling</button>
//       </div>
//     </div>
//   );
// }

// export default Hook;


//UseEffect Hook
// import React, { useState, useEffect } from 'react';

// const Hook = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('count value is changing', count);
//   }, []);

//   function valueChange() {
//     setCount(prevCount => prevCount + 1); // Use a functional update here
//   }

//   return (
//     <div>
//       {count}
//       <button onClick={valueChange}>Increment</button>
//     </div>
//   );
// }

// export default Hook;



//useCallback Hook


// import React, { useState, useCallback } from 'react';

// const Hook = () => {
//   const [count, setCount] = useState(0);

//   const valueSet = useCallback(() => {
//     console.log('count value is changing', count);
//     setCount(prevCount => prevCount + 1);
//   }, [count]);

//   return (
//     <div>
//       {count} <br />
//       <button onClick={valueSet}>Increment</button>
//     </div>
//   );
// }

// export default Hook;


//useMemo Hook
// import React, { useMemo } from 'react'
// import React , {useState,useMemo} from 'react'

// const Hook = () => {
//   const [num1,setNum1]=useState(5)
//   const [num2,setNum2]=useState(10)
//   // console.log(num1)
//   // console.log(num2)

//  const memorizedValue= useMemo(()=>{
//   console.log('Recalculating value')
//       return num1+num2
//  },[num1,num2])

  

 
//  return (
//   <div>
//     <p>A: {num1}</p>
//     <p>A: {num2}</p>
//     <p>Computed value: {memorizedValue}</p>
//     <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
//     <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
//   </div>
// );
// }

// export default Hook

//useContext Hook
//Basic Syntax

// import React, { createContext } from 'react';

// // Create a context
// const MyContext = createContext(defaultValue);


import React, { createContext, useContext, useState } from 'react';

const Hook = () => {
  const ThemeContext = createContext('light');
  const theme = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleClick = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');   
    console.log(currentTheme);

    //or 
    //if (currentTheme === 'dark') {
//   setCurrentTheme('light');
// } else {
//   setCurrentTheme('dark');
// }

  };

  document.body.style.backgroundColor = currentTheme === 'dark' ? 'black' : 'white';
  document.body.style.color = currentTheme === 'dark' ? 'white' : 'black';


  return (
    <div>
      <h1>Toggle Theme</h1>
      <button onClick={handleClick} style={{backgroundColor:currentTheme === 'dark' ? 'white':'black' , color:currentTheme === 'dark' ? 'black':'white'}}>
        Change Theme
      </button>
    </div>
  );
};

export default Hook;
