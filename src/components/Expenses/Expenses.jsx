import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import "../../styles/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onChangeFilterYearHandler = (selectedYear) => {
    console.log(`in expenses: ${selectedYear}`)
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    if(filteredYear === 'ALL') {
      return props.items;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  })



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
        selected={filteredYear}
        onChangeFilterYear={onChangeFilterYearHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
