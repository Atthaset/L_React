import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import "./App.css"
import { useState } from 'react'

function App() {
  const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }
  const [items,setItem] = useState([])//ชื่อ [state,Function setState] = useState(ค่าเริ่มต้นของ state)
  //ค่าเริ่มต้นอาจจะเป็นค่าเปล่า Arrary เปล่าได้ เช่น const [items,setItem] = useState([])
  const onAddNewItem = (newItem) => {//function รอรับค่าจาก FormComponent
    setItem((prevItem)=>{
      return [newItem,...prevItem]//ข้อมูลใหม่ ต่อข้อมูลเดิมหรือข้อมูลใหม่อยู่บนสุด
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
