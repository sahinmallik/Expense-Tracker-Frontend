import React from "react";
import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // the props are coming from Expenses.js
  // const [title, setTitle] = useState(props.title); //useState return two value one is the original value and the other one is the upadated function which is to us to assign the new value to a certain component. React normally do not eavluate a component after changed in variable or something else but using useState function the React revaluate the component and upadate the component. And it re-evaluate that component in which the useState function registered and it will not evalutae any other component.

  // const clickHandler = () => {
  //   let updatedTitle = prompt("Enter Your Own Title!");
  //   if (updatedTitle === "") {
  //     return;
  //   } else {
  //     setTitle(updatedTitle);
  //     console.log(title);
  //   }
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
