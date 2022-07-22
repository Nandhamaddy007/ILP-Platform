import Groups from "./Groups";
import LeftPane from "./leftPane";

export default function TeacherDashboard(props){
    return(
        <>
       <h1>Hello [Teacher name]</h1>
        <LeftPane
        icons={false}
        charts={false} 
        right={false}
         name="Hello [Teacher name]"
        />
        <Groups />
       
        </>
    )
}