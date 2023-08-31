import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // console.log(props.selected);
  const dropdownChangeHandler = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="Expense_filter_wrapper">
      <label>Filter By Year</label>
      <select onChange={dropdownChangeHandler} name="expense_filter">
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
