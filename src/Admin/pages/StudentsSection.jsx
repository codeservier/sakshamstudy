import React, { useState } from 'react';
import { FaUpload, FaUsers, FaDollarSign, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);
const StudentsSection = () => (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Student Management</h3>
      {/* Example table for students */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">Present</td>
          </tr>
          <tr>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  export default StudentsSection;