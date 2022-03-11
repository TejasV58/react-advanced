import React, { useState } from 'react';

const UseStateBasics = () => {

  const [title, setTitle] = useState("random text");
  const handleClick = () => {
    if (title === "random text") {
      setTitle("HELLO WORLD");
    }
    else {
      setTitle("random text");
    }
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' type="button" onClick={handleClick}>Change Title</button>
    </React.Fragment>
    
  );
};

export default UseStateBasics;
