import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleFormShow = () => {
    setShowForm(true);
  };

  const formClose = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm onFormClose={formClose} formData={props.formData} />
      )}
      {!showForm && <button onClick={handleFormShow}>Show Form</button>}
    </div>
  );
};

export default NewExpense;
