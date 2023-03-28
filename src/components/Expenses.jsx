import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../styles/Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        return(
          <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
