import { ExpesesCard } from "./ExpensesCard";

export const Expenses = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((el) => {
        return <ExpesesCard el={el} key={el.id} onDelete={props.onDelete} />;
      })}
      {props.children}
    </div>
  );
};
