import  style from './App.module.css';
import img from './clock.png';
import {useEffect, useState} from 'react';

function App() {
  const [date,saveDate] = useState('');
  const [time,savetime] = useState('');
  useEffect(()=>{
    const date = new Date();
    saveDate(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
    const n = setInterval(()=>{
      savetime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    },1000)
    return ()=>{
      clearInterval(n);
    }
  },[time])
  return (
    <div className={style.App}>
      <div className={style.main}>
        <img src={img}/>
        <h1>{time}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
