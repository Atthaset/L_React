import Transaction from "./Component/Transaction";
import "./App.css"

function App() {
  const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }
  return (
    <div className="Container">
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <Transaction />
    </div>
  );
}

export default App;
