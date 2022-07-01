import React from "react";
import { Chart as ChartJS,  Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    position:"bottom",
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['Engineer', 'Doctor', 'Lawyer', 'Scientist', 'Accountant', 'Business'];
  const data2 = {
    labels,
    datasets: [
      {
        label: 'Activities Completed',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(0, 100, 0, 0.8)',
      },
      {
        label: 'Activities incomplete',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(1000, 0, 0, 0.8)',
      },
    ],
  };
  const BarChart=(props)=>{
return(<>
<Bar options={options} data={data2} />
</>)
  }
  export default BarChart