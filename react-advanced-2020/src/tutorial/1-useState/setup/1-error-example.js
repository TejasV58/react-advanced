import React from 'react';

const ErrorExample = () => {
  let title = 'Random title';
  const handleClick = () => {
    title = 'Hello people!';
  };
  return (<React.Fragment>
    <h2>{title}</h2>
    <button className="btn" type="button" onClick={handleClick}>
      Change title
    </button>
  </React.Fragment>);
};

export default ErrorExample;
