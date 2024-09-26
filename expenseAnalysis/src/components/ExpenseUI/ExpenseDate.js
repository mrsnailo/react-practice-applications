function ExpenseDate(props) {
  const month = props.date.toLocaleString("bn-BD", { month: "long" });
  const day = props.date.toLocaleString("bn-Bd", { day: "2-digit" });
  const year = props.date.toLocaleString("bn-BD", { year: "numeric" });

  return (
    <div className="date">
      <div className="ExpenseDate_month">{month}</div>
      <div className="ExpenseDate_day">{day}</div>
      <div className="ExpenseDate_year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
