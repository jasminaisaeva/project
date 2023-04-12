import { useState } from "react";
import Button from "../UI/Button";
import "./ExpensesForm.css";

import { Input } from "./../UI/Input";
export const ExpensesForm = ({ onClick, onSubmit }) => {
  const [inputText, setInputText] = useState(""); //Ali21
  const [inputNumber, setInputNumber] = useState(0);
  const [inputDate, setInputDate] = useState(null);

  //REact memory
  // setInputText('')
  // setInputNumber()
  //setInputDate
  function getInputValue(e) {
    setInputText(e.target.value);
  }

  function getNumberInput(e) {
    setInputNumber(e.target.value);
  }

  async function submitHandler() {
    const product = {
      title: inputText,
      price: inputNumber,
      date: inputDate,
    };

    onSubmit(product);

    setInputText("");
    setInputNumber("");

    setInputDate("");
  }
  console.log("REnder");

  return (
    <div style={{ height: "300px" }}>
      <label>Заголовок</label>
      <Input
        type="text"
        placeholder="Заголовок"
        value={inputText} //'Ali21'          
        onChange={getInputValue}
      />
      <label>Количество</label>
      <Input
        type="number"
        placeholder="Количество"
        value={inputNumber}
        onChange={getNumberInput}
      />
      <label>Дата</label>
      <Input type="date" placeholder="Дата" value={inputDate} />
      <div className="new-expense__actions">
        <Button onClick={onClick} marginRight="20px">
          Отмена
        </Button>
        <Button onClick={submitHandler}>Добавить расход</Button>
      </div>
    </div>
  );
};
