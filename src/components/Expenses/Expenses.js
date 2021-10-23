import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChange = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onFilterChange={filterChange} year={filteredYear} />
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
