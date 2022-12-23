import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import HellowComponent from './Component/HellowComponent';
import reportWebVitals from './reportWebVitals';

//การสร้าง Functional Component
function HellowWorldComponent() {
    return <h1>HellowWorld</h1>
}

//การสร้าง Class Component
class HellowsgigzComponent extends React.Component{
  render(){
    return <h1>สวัสดี Component</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));//เชื่อไปไฟล์ index.html ผ่านไอดี root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
