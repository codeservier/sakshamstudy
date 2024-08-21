

import React, { useState } from 'react';
import { FaUpload, FaUsers, FaDollarSign, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);
const UploadSection = () => (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Upload Materials</h3>
      <input type="file" className="mb-4" />
      <button className="bg-blue-500 text-white p-2 rounded">Upload</button>
    </div>
  );
  export default UploadSection;