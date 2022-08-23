import React from "react";

import { UserData } from "./../../Data";
import { Chart } from "chart.js";
import "~/component/cp.css";
import Revenuechart from "./revenuechart/Revenuechart";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { DatePicker, Space } from "antd";
import Doughnutchar from "./doughnutchar/Doughnutchar";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Home() {
  const [data, setData] = useState({
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"],
    datasets: [
      {
        data: [168, 170, 180, 240, 210, 140, 240],
        backgroundColor: "rgba(250, 160, 95, 0.16)",
        borderColor: "rgba(255, 138, 72, 1)",
        tension: 0.6,
        fill: true,
      },
    ],
  });
  return (
    <div className="Conten">
      <h1>
        <b>Thống kê</b>
      </h1>
      <div className="char">
        <div className="contents">
          <div>
            <h2>Doanh thu</h2>
          </div>
          <div>
            <Space direction="vertical" size={12}>
              <DatePicker
                dateRender={(current) => {
                  const style = {};

                  if (current.date() === 1) {
                    style.border = "1px solid #1890ff";
                    style.borderRadius = "50%";
                  }

                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>
          </div>
        </div>
        <div style={{height:'327px'}} className="charjsx">
          <Line
            data={data}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          >
            Hello
          </Line>
        </div>
        <div className="totalsales">
          <h3 className="totalsales-title">Tổng doanh thu theo tuần</h3>
          <p>
            <b>525.145.000</b> đồng
          </p>
        </div>
        <div className="dongchart">
          <div>
            <Space direction="vertical" size={12}>
              <DatePicker
                dateRender={(current) => {
                  const style = {};

                  if (current.date() === 1) {
                    style.border = "1px solid #1890ff";
                    style.borderRadius = "50%";
                  }

                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Space>
          </div>
          <div className="doughnutChar">
            <div>
              <h3>Gói gia đình</h3>
              <Doughnutchar />
            </div>
            <div>
              <h3>Gói sự kiện</h3>
              <Doughnutchar />
            </div>
            <div style={{marginBottom:'16%'}} >
              <ul>
              
                <li style={{marginBottom:'18px'}}><span className="usedTickets"></span>Vé đã được sử dụng</li>
                <li><span className="unusedTickets"></span>Vé chưa sử dụng</li>
              </ul>
            </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Home;
