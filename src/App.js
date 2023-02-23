import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function Button(props){
  const BtnClick=()=>{
    props.onClickAct(props.newVal);
  }
  return(
    <button onClick={BtnClick}>{props.newVal}</button>
  );
}

function Display(props){
  return(
    <div style={{backgroundColor:"gray", color:"white", width:"100px", textAlign:"center"}}>{props.displayValue}</div>
  );
}

function App() {
  const newVal1="10";
  const newVal2="-100";
  const newVal3="25";

  const [displayValue,setDisplayValue]=useState("0");

  const stateFunc=(newVal)=>{
    setDisplayValue(parseInt(displayValue)+parseInt(newVal));
  }

  return (
    <>
      <Button newVal={newVal1} onClickAct={stateFunc}/>
      <Button newVal={newVal2} onClickAct={stateFunc}/>
      <Button newVal={newVal3} onClickAct={stateFunc}/>
      <Display displayValue={parseInt(displayValue)}/>
    </>
  );
}

export default App;