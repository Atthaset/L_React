import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import "./App.css"
import { useState } from 'react'
import DataContext from "./Data/DataContext";
import ReportComponent from "./Component/ReportComponent";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }
  const initState = [
    {id:1,title:"เงินเดือน",amount:50000},
    {id:1,title:"ค่าเดินทาง",amount:-1500},
    {id:1,title:"ขายของ",amount:1200},
    {id:1,title:"ค่ากิน",amount:-14000}
  ]
  const [items, setItem] = useState([])//ชื่อ [state,Function setState] = useState(ค่าเริ่มต้นของ state)
  //ค่าเริ่มต้นอาจจะเป็นค่าเปล่า Arrary เปล่าได้ เช่น const [items,setItem] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {//function รอรับค่าจาก FormComponent
    setItem((prevItem) => {
      return [newItem, ...prevItem]//ข้อมูลใหม่ ต่อข้อมูลเดิมหรือข้อมูลใหม่อยู่บนสุด
    })
  }
  return (
    <DataContext.Provider value = {
      {
        income:50000,
        expense:-20000
      }
    }>
      <div className="Container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
