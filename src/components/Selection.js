import React, { useState } from "react";
import  "../styles/Selection.css";
import "../styles/App.css"
let Selection = ({applycolor})=>{
    let [changecolor,setchangecolor] = useState({box1:"",box2:"",box3:""});
    let handleBox = (box)=>{
        if(box=='box1'){
            setchangecolor(prev=>({...prev,box1:applycolor}))
        }
        if(box=='box2'){
            setchangecolor(prev=>({...prev,box2:applycolor}))
        }
        if(box=='box3'){
            setchangecolor(prev=>({...prev,box3:applycolor}))
        }
    }
   return(
    <div className="selection-container">
       <div className="box" style={{backgroundColor:changecolor.box1}} onClick={()=>{handleBox('box1')}}>Selection</div>
       <div className="box" style={{backgroundColor:changecolor.box2}} onClick={()=>{handleBox('box2')}}>Selection</div>
       <div  className="box" style={{backgroundColor:changecolor.box3}} onClick={()=>{handleBox('box3')}}>Selection</div>
    </div>
   )
}
export default Selection;














/* let Selection = ({applycolor}) =>{
    let [changecolor,setchangecolor] = useState({box1:"",box2:"",box3:""})
    let handleBox  = (box)=>{
        if(box==="box1"){
            setchangecolor(prev=>({...prev,box1:applycolor}))
        }
        if(box==="box2"){
            setchangecolor(prev=>({...prev,box2:applycolor}))
        }
        if(box==="box3"){
            setchangecolor(prev=>({...prev,box3:applycolor}))
        }
    }
    return(
       <div className="selection-container">
        <div className="box" style={{ backgroundColor: changecolor.box1 }} onClick={()=>{handleBox("box1")}}>Selection</div>
        <div className="box" style= {{ backgroundColor: changecolor.box2 }} onClick={()=>{handleBox("box2")}}>Selection</div>
        <div className="box" style= {{ backgroundColor: changecolor.box3 }} onClick={()=>{handleBox("box3")}}>Selection</div>
     </div>
    )
}
export default Selection 
 */