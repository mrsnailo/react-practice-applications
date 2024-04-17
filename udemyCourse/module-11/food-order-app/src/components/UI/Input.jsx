import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        className="p-3 bg-slate-400 w-28 rounded-md mx-3"
        id={props.input.id}
        {...props.input}
      />
    </>
  );
});

export default Input;
