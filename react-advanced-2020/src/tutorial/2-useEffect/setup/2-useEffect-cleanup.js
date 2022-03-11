import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(200);
  console.log("inner component");
  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize',checkSize);
    }
  },[]);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  return <>
    <h1>Window size</h1>
    <h2>{size}</h2>
  </>;
};

export default UseEffectCleanup;
