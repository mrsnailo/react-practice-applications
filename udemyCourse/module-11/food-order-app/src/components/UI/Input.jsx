const Input = (props) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className="p-3 bg-slate-400 w-28 rounded-md mx-3" id={props.input.id} {...props.input} />
    </>
  );
};

export default Input;
