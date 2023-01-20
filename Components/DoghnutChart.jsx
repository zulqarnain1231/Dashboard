import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoghnutChart = () => {
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartOptions({
            plugins: {

            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])
    const data = {
        labels: ['NewYork', 'Las Angeles', 'Washington'],
        datasets: [
            {
                label: '# of Visiters',
                data: [8654, 6934, 6443],
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
        <div className='bg-white  scrollbar-hide p-6  w-full  h-[50vh] col-span-1  rounded-lg border overflow-auto shadow-lg '>

            <Doughnut data={data} options={chartOptions} />
            {/* <h1 className='text-center pb-2 text-xl'>Number OF Visiters Last Week</h1> */}
        </div>
    )
}

export default DoghnutChart