import Transaction from "./Component/Transaction";
import FormComponent from "./Component/FormComponent";
import "./App.css"
import { useState, useEffect } from 'react'
import DataContext from "./Data/DataContext";
import ReportComponent from "./Component/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }
  const [items, setItem] = useState([])//ชื่อ [state,Function setState] = useState(ค่าเริ่มต้นของ state)
  //ค่าเริ่มต้นอาจจะเป็นค่าเปล่า Arrary เปล่าได้ เช่น const [items,setItem] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {//function รอรับค่าจาก FormComponent
    setItem((prevItem) => {
      return [newItem, ...prevItem]//ข้อมูลใหม่ ต่อข้อมูลเดิมหรือข้อมูลใหม่อยู่บนสุด
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(amounts => amounts > 0).reduce((total, amounts) => total += amounts, 0)
    const expense = (amounts.filter(amounts => amounts < 0).reduce((total, amounts) => total += amounts, 0)) * -1
    setReportIncome(income)
    setReportExpense(expense)
  }, [items, reportIncome, reportExpense])
  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }
    }>
      <div className="Container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizonntal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บัญทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
            <Route path='/' element={<ReportComponent />}></Route>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem} /> <Transaction items={items} /> </>}></Route>
          </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

// <ReportComponent />
// <FormComponent onAddItem={onAddNewItem} />
// <Transaction items={items} />

export default App;
