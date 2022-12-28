import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import "./App.css"
import { useState } from 'react'

function App() {
  const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }
  const initData = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },//id = key props ค่าต้องไม่ซ้ำกัน สามารถใช้ UUID ได้ 
    { id: 2, title: "เงินเดือน", amount: 50000 },
    { id: 3, title: "ค่าเดินทาง", amount: 500 },
  ]
  const [items,setItem] = useState(initData)//ชื่อ [state,Function setState] = useState(ค่าเริ่มต้นของ state)
  //ค่าเริ่มต้นอาจจะเป็นค่าเปล่า Arrary เปล่าได้ เช่น const [items,setItem] = useState([])
  const onAddNewItem = (newItem) => {//function รอรับค่าจาก FormComponent
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <div className="Container">
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem={onAddNewItem} /> 
      <Transaction items={items} />
    </div>
  );
}

export default App;
