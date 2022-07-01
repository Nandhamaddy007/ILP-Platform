import LeftPane from "./leftPane";
import {  Route, Routes } from 'react-router-dom';
import Charts from "../Charts/Charts";

export default function StateHeadDashboard(props){
    return(
        <>
      
        <LeftPane 
         name="Hello [State Head Name!]"
        />
       <Routes>
        <Route path="details" element={<h1>Details</h1>} />
       </Routes>
        </>
    )
}