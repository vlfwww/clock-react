import  style from './App.module.css';
import img from './clock.png';
import {useEffect, useState} from 'react';

function App() {
  const [date,saveDate] = useState('');
  const [time,savetime] = useState('');
  useEffect(()=>{
    const date = new Date();
    const mounth = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    if(day<10){
      day = `0${day}`
    }
    if(hours<10){
      hours = `0${hours}`
    }
    if(mins<10){
      mins = `0${mins}`
    }
    if(sec<10){
      sec = `0${sec}`
    }
    switch(mounth){
      case 1: saveDate(`${day} Января, ${date.getFullYear()}`); break;
      case 2: saveDate(`${day} Февраля, ${date.getFullYear()}`); break;
      case 3: saveDate(`${day} Марта, ${date.getFullYear()}`); break;
      case 4: saveDate(`${day} Апреля, ${date.getFullYear()}`); break;
      case 5: saveDate(`${day} Мая, ${date.getFullYear()}`); break;
      case 6: saveDate(`${day} Июня, ${date.getFullYear()}`); break;
      case 7: saveDate(`${day} Июля, ${date.getFullYear()}`); break;
      case 8: saveDate(`${day} Августа, ${date.getFullYear()}`); break;
      case 9: saveDate(`${day} Сентября, ${date.getFullYear()}`); break;
      case 10: saveDate(`${day} Октября, ${date.getFullYear()}`); break;
      case 11: saveDate(`${day} Ноября, ${date.getFullYear()}`); break;
      case 12: saveDate(`${day} Декабря, ${date.getFullYear()}`); break;
    }
    const n = setInterval(()=>{
      savetime(`${hours}:${mins}:${sec}`)
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
