import { useContext } from "react";
import DataContext from "../Data/DataContext";
import './ReportComponent.css'

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    const formatNumber=(num)=>{
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿{formatNumber((income - expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับทั้งหมด</h4>
                    <p className="report plus">฿{formatNumber(income.toFixed(2))}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿{formatNumber(expense.toFixed(2))}</p>
                </div>
            </div>
        </div>
    );
}

// (income - expense).toFixed(2)
// formatNumber((income - expense).toFixed(2))

export default ReportComponent