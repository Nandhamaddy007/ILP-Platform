import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title } from 'chart.js';
import { Pie,Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ['Engineer', 'Doctor', 'Lawyer', 'Scientist', 'Accountant', 'Business'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [ //"red","blue","green","violet","aqua","brown"
        'rgba(255, 0, 0, 0.7)',
         'rgba(0, 0, 255, 0.7)',
         'rgba(0, 255, 0, 0.7)',
         'rgba(64, 64, 64,0.7)',
         'rgba(0, 255, 255, 0.7)',
         'rgba(204, 0, 0, 0.7)',
      ],
      borderColor: ["red","blue","green","violet","aqua","brown"
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const Charts = (props) => {
 
  return (
   <>
   
   <Pie data={data} />
   
    </>
  )
}
export default Charts