import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/TransactionChart';
import RecentOrders from '../components/RecentOrders';
import BuyerProfilePieChart from '../components/BuyerProfilePieChart';
import PopularProducts from '../components/PopularProducts';

export default function Dashboard() {
	return (
		<div className="p-4 space-y-4">
			{/* Stats Grid */}
			<DashboardStatsGrid />

			{/* Charts Section */}
			<div className="flex flex-col lg:flex-row gap-4">
				<TransactionChart className="flex-1" />
				<BuyerProfilePieChart className="flex-1" />
			</div>

			{/* Orders and Products Section */}
			<div className="flex flex-col lg:flex-row gap-4">
				<RecentOrders className="flex-1" />
				<PopularProducts className="flex-1" />
			</div>
		</div>
	);
}
