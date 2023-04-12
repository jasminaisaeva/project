import "./ExpensesCard.css";

export const ExpesesCard = ({ el, onDelete }) => {
  const { date } = el;
  // const year = date.getFullYear();
  // const day = date.getDay();

  return (
    <div className="card">
      <h3>{el.title}</h3>
      <div className="card-block">
        <div>price:{el.price}</div>
        {/* <div>date:{`${day}/${year}`}</div> */}
        <button onClick={() => onDelete(el.id)}>delete</button>
      </div>
    </div>
  );
};
