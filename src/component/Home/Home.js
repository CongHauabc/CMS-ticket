import React from 'react';

import { UserData } from './../../Data';
import { Chart } from 'chart.js';
import '~/component/cp.css';
import Revenuechart from './revenuechart/Revenuechart';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
);


function Home() {
    const [data, setData]= useState({
        labels:["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ nhật",],
        datasets:[
          {
           
            data:[150,170,180,240,210,200,180],
            backgroundColor: 'rgba(250, 160, 95, 0.16)',
            borderColor: 'rgba(255, 138, 72, 1)',
          tension: 0.4,
            fill: true,
           
          }
        ]
      })
    return (
        <div className='Conten'>
            <h1><b>Thống kê</b></h1>
            <div className='char'>
                <div>
                    <h2>Doanh thu</h2>

                </div>
                <div>
                <Line data={data} options={{
          plugins: {
            legend: { 
              display: false
            }
          },
          scales: {
            x:{
              grid: {
                display: false
              }
            }
          }
                }}>Hello</Line>
                </div>
            </div>

        </div>
    );
}

export default Home;