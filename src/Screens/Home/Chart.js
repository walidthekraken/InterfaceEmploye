import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Statistiques',
    },
  },
};

const labels = ["0","1","2","3","4","5","6","7","8","9"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Les lieux les plus visités par les touristes',
      data: ["40","65","0","50","22","58","75","33","18","10"],
      borderColor: '#E17E01',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  ],
};


const Chart = () => {
  return <Line 
  width={600}
  height={300}
  options={options} data={data}
   />;
}

export default Chart
