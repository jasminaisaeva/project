import Button from "../UI/Button";
import { ExpensesForm } from "./ExpensesForm";
import { useState } from "react";

export const NewExpense = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false); //false
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const someFunc = async () => {};

  async function openAndCloseExpensesFormHandler() {
    setText("asdf");
    setNumber("asdfasdf");
    await someFunc();
    setShowForm((prev) => !prev);
  }
  // console.log("Render");

  return (
    <div
      style={{
        backgroundColor: "#AD9BE9",
        padding: "20px",
      }}
    >
      {showForm ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          onSubmit={onSubmit}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новый расход
        </Button>
      )}
    </div>
  );
};
