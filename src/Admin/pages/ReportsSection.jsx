import React, { useState } from 'react';
import { FaUpload, FaUsers, FaDollarSign, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);



const ReportsSection = () => (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Reports</h3>
      {/* Example reports content */}
      <p>Here you can generate and view various reports.</p>
    </div>
  );
export default ReportsSection;