import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

ChartJS.register(
    Legend,
    Title,
    Tooltip,
    BarElement,
    LinearScale,
    CategoryScale
);

const Barchart = () => {
  const [chartData,setChartData]=useState({
    datasets:[],
  });
  const [chartOptions,setChartOptions]=useState({})
    return (
        <>
        <div className='bg-white p-4 w-full lg:h-[70vh] h-[40vh] md:col-span-2 m-auto rounded-lg border shadow-lg'>
            <Bar data={chartData} options={chartOptions} />
        </div>
        </>
    )
}

export default Barchart