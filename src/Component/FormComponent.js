import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {

    //State
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()
        console.log("บันทึกข้อมูลแล้ว")
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount),
        }
        props.onAddItem(itemData)//สร้าง props เพื่อส่ง itemData ไปหา App.js
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkdata = title.trim().length>0 && amount !== 0 
        setFormValid(checkdata)
    },[title,amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label> ชื่อรายการ </label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label> จำนวนเงิน </label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button type="submit" disabled = {!formValid}> เพิ่มข้อมูล </button>
                </div>
            </form>
        </div>
    )// disabled = !false = true ให้ปิด , disabled = !true = flase ไม่สามารถปิดได้  
}

export default FormComponent;