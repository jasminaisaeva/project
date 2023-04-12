import "./App.css";
// import { Input } from "./components/UI/Input";
// import Button from "./components/UI/Button";
import { NewExpense } from "./components/newExpense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";

const productData = [
  {
    title: "Алма",
    price: 120,
    date: new Date(2021, 2, 28),
    id: "1",
  },
  {
    title: "Car",
    price: 200,
    date: new Date(2021, 5, 12),
    id: "2",
  },
  {
    title: "Flower",
    price: 30,
    date: new Date(2020, 7, 14),
    id: "3",
  },
];

// React memory
// state = 1

function App() {
  const [newproduct, setNewProduct] = useState(productData);
  const [state,setState] = useState(0)  //1

  const addNewExpensesHandler = (data) => {
    const newArr = [...newproduct, data];
    setNewProduct(newArr);
  };

  function deleteExpenses(id) {
    const newData = newproduct.filter((el) => el.id !== id);
    setNewProduct(newData);
  }

  return (
    <div className="App">
      {state} // 1
      <NewExpense onSubmit={addNewExpensesHandler} />
      <Expenses data={newproduct} onDelete={deleteExpenses} />
    </div>
  );
}

export default App;
