import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoghnutChart = () => {
    const [chartOptions,setChartOptions]=useState({});
    useEffect(()=>{
        setChartOptions({
            plugins:{
           
            },
            maintainAspectRatio:false,
            responsive:true,
        })
    },[])
    const data = {
        labels: ['NewYork', 'Las Angeles', 'Washington' ],
        datasets: [
          {
            label: '# of Viewers',
            data: [5654, 1934, 3443],
            backgroundColor: [
              '#E90069',
              '#663090',
              '#5B93D3',
              
            ],
            borderColor: [
                '#E90069',
                '#663090',
                '#5B93D3',
              
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='bg-white  relative p-4 w-full lg:h-[70vh] h-[50vh] md:col-span-2 m-auto rounded-lg border shadow-lg overflow-auto'>
       <h1 className='text-center pb-2 text-xl'>Number OF Visiters Last Week</h1>
        <Doughnut data={data} options={chartOptions} />
    </div>
  )
}

export default DoghnutChart