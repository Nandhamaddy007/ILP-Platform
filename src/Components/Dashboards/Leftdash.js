import { useState } from "react"

export default function LeftDash(props){
    const [style,setStyle]= useState({width:"0px"})
    const openNav=()=>{
        if(style.width==="250px"){
            setStyle({width:"0px"})
        }else
setStyle({width:"250px"})
    }
    const closeNav=()=>{
        setStyle({width:"0px"})
    }
    return(
        <>
        
<div id="mySidebar" className="sidebar" style={style}>
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <button className="openbtn float-end mt-2" onClick={openNav}>☰</button>  
 
</div>

        </>
    )
}