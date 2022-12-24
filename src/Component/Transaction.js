import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },//id = key props ค่าต้องไม่ซ้ำกัน สามารถใช้ UUID ได้ 
    { title: "เงินเดือน", amount: 50000 },
    { title: "ค่าเดินทาง", amount: 500 },
    { title: "ค่าเช่าห้อง", amount: 8000 },
    { title: "ค่ากระกัน", amount: 1000 }
  ]
  return (
    <ul className="item-list">
      {data.map((element) => {
        return <Item {...element} key={uuidv4()} />//<Item title={element.title} amount={element.amount}/>
      })}
    </ul>
  );
};

export default Transaction;