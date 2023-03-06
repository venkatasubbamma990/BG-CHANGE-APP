 import React, { useState } from "react";
import '../styles/App.css';
import "../styles/Selection.css"
import Selection from './Selection';
let App = ()=>{
  let [color,setcolor] = useState(" ");
  let Handlecolor = (clr)=>{
    setcolor(clr)
  }
  return(
    <div>
      <div className="buttons">
        <button className="blue" onClick={()=>{Handlecolor("blue")}}>Blue</button>
        <button className="orange" onClick={()=>{Handlecolor("orange")}}>Orange</button>
        <button className="green" onClick={()=>{Handlecolor("green")}}>Green</button>
      </div>
      <div>
        <Selection applycolor={color}/>
      </div>

    </div>
  )
}
export default App;




















/* let App = () =>{
  let [color,setcolor] = useState(" ");
  let Handlecolor = (clr) =>{
    setcolor(clr)
  }
  return(
    <div>
    <div className="buttons">
    <button className="blue" onClick={()=>Handlecolor("blue")}>Blue</button>
    <button className="orange" onClick={()=>Handlecolor("orange")}>orange</button>
    <button className="green" onClick={()=>Handlecolor("green")}>Green</button>
    </div>
     <Selection  applycolor={color}/>

    </div>
  )
}
export default App; */
 
