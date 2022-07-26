import Groups from "./Groups";
import LeftDash from "./Leftdash";
// import LeftPane from "./leftPane";

export default function TeacherDashboard(props){
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-9 pt-2"> <h4>Hello [Teacher name]</h4></div>
            <div className="col-3"> <LeftDash /></div>
        </div>
        </div>
        <Groups />
   
      
        
       
        </>
    )
}