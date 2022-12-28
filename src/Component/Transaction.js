import Item from "./Item";
import './Transaction.css'

const Transaction = (props) => {
  const {items} = props
  return (
    <ul className="item-list">
      {items.map((element) => {
        return <Item {...element} key={element.id} />//<Item title={element.title} amount={element.amount}/>
      })}
    </ul>
  );
};

export default Transaction;