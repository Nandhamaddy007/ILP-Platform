import React from "react";
import { Chart as ChartJS,  Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = ['Engineer', 'Doctor', 'Lawyer', 'Scientist', 'Accountant', 'Business'];
const state = {
  labels: labels,
  datasets: [
    {
      label: "Students Enrolled",
      backgroundColor: 'rgba(13,202,240,0.8)',
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 70,65]
    }
  ]
}

  
 
  const BarChart=(props)=>{
return(<>
 <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />        
</>)
  }
  export default BarChart