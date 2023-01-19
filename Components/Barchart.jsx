import React, { useEffect, useState } from 'react';
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

const Barchart = () => {
  const [chartData,setChartData]=useState({
    datasets:[],
  });
  const [chartOptions,setChartOptions]=useState({});
  useEffect(()=>{
    setChartData({
        labels:['MON','TUE','WED','THU','FRI','SAT','SUN'],
        datasets:[
            {
                label:'Sales $',
                data:[3433,2321,2223,1211,4354,2131,4454],
                borderColor:'rgb(255, 99, 132)',
                backgroundColor:'rgba(255, 99, 132, 0.5)'
            }
        ]
    })
    setChartOptions({
        plugins:{
           
        },
        maintainAspectRatio:false,
        responsive:true,
    })
  },[])
    return (
        <>
        <div className='bg-white  relative p-4 w-full lg:h-[70vh] h-[50vh] md:col-span-2 m-auto rounded-lg border shadow-lg'>
            <Line data={chartData} options={chartOptions} />
        </div>
        </>
    )
}

export default Barchart