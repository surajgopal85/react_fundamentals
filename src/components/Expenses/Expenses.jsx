import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "../../styles/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const onChangeFilterYearHandler = (selectedYear) => {
    console.log(`in expenses: ${selectedYear}`)
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
        selected={filteredYear}
        onChangeFilterYear={onChangeFilterYearHandler}
        />
        {props.items.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
      ))}
      </Card>
    </div>
  );
};

export default Expenses;
