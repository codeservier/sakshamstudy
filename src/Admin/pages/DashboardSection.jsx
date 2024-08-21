import React, { useState } from 'react';
import { FaUpload, FaUsers, FaDollarSign, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const DashboardSection = () => {
    // Example data for charts
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Income',
          data: [4000, 4500, 5000, 6000, 7000, 8000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    const pieData = {
      labels: ['Students Present', 'Students Absent'],
      datasets: [
        {
          label: 'Student Attendance',
          data: [180, 20],
          backgroundColor: ['#36a2eb', '#ff6384'],
        },
      ],
    };
  
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Number of Students',
          data: [50, 60, 70, 80, 90, 100],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: true,
        },
      ],
    };
  
    return (
      <div className="bg-white p-6 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Dashboard Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">Income Overview</h4>
            <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Monthly Income' } } }} />
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">Student Attendance</h4>
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Student Attendance' } } }} />
          </div>
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">Student Enrollment</h4>
            <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Number of Students Over Time' } } }} />
          </div>
        </div>
      </div>
    );
  };
  

  export default DashboardSection;