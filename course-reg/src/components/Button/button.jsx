import React from 'react';

const Button = ({children, classes, isDisabled, onClick}) => {

  return(
  <>
      <button onClick={onClick} className={`w-full my-2 p-2 bg-blue-400 rounded-md font-semibold text-xl text-white ${classes}`} type='button' disabled={isDisabled}>{children}</button>
    </>
  )
}

export default Button;
