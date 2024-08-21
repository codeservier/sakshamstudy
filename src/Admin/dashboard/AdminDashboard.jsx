import React, { useState } from 'react';
import { FaUpload, FaUsers, FaDollarSign, FaChartBar, FaTachometerAlt } from 'react-icons/fa';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import DashboardSection from '../pages/DashboardSection';
import UploadSection from '../pages/UploadSection';
import StaffSection from '../pages/StaffSection';
import IncomeSection from '../pages/IncomeSection';
import ReportsSection from '../pages/ReportsSection';
import StudentsSection from '../pages/StudentsSection';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardSection />;
      case 'upload':
        return <UploadSection />;
      case 'students':
        return <StudentsSection />;
      case 'staff':
        return <StaffSection />;
      case 'income':
        return <IncomeSection />;
      case 'reports':
        return <ReportsSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Side Navbar */}
      <nav className="w-64 bg-gray-800 text-white h-full p-4">
        <h1 className="text-2xl font-bold mb-6">Coaching Dashboard</h1>
        <ul>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center text-white hover:text-gray-400 ${
                activeTab === 'dashboard' ? 'text-gray-300' : ''
              }`}
            >
              <FaTachometerAlt className="mr-2" /> Dashboard
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center text-white hover:text-gray-400 ${
                activeTab === 'upload' ? 'text-gray-300' : ''
              }`}
            >
              <FaUpload className="mr-2" /> Upload Materials
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab('students')}
              className={`flex items-center text-white hover:text-gray-400 ${
                activeTab === 'students' ? 'text-gray-300' : ''
              }`}
            >
              <FaUsers className="mr-2" /> Students
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab('staff')}
              className={`flex items-center text-white hover:text-gray-400 ${
                activeTab === 'staff' ? 'text-gray-300' : ''
              }`}
            >
              <FaUsers className="mr-2" /> Staff
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab('income')}
              className={`flex items-center text-white hover:text-gray-400 ${
                activeTab === 'income' ? 'text-gray-300' : ''
              }`}
            >
              <FaDollarSign className="mr-2" /> Income
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setActiveTab('reports')}
              className={`flex items-center text-white hover:text-gray-400 ${
                activeTab === 'reports' ? 'text-gray-300' : ''
              }`}
            >
              <FaChartBar className="mr-2" /> Reports
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">{getTabTitle(activeTab)}</h2>
        {renderContent()}
      </main>
    </div>
  );
};

// Helper function to get the title based on active tab
const getTabTitle = (tab) => {
  switch (tab) {
    case 'dashboard':
      return 'Dashboard Overview';
    case 'upload':
      return 'Upload Materials';
    case 'students':
      return 'Student Management';
    case 'staff':
      return 'Staff Management';
    case 'income':
      return 'Income Overview';
    case 'reports':
      return 'Reports';
    default:
      return 'Dashboard Overview';
  }
};

// Dashboard Section with Charts

// Example Components for other sections







export default AdminDashboard;
