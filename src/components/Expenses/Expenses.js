import React, { useState } from "react";
import Card from "./../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChange = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterChange={filterChange} year={filteredYear} />

      <ExpensesChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 && (
        <p className="no-expese">No expenses for the selected year.</p>
      )}

      {filteredExpenses.map((expense) => (
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
