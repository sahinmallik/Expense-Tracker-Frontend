import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
