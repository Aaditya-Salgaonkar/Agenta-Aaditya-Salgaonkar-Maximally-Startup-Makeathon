```
import React from 'react';
import Chart from './Chart';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Revenue</h2>
        <div className="h-48">
          <Chart type="bar" data={revenueData} />
        </div>
      </div>
      <div className="flex-1 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">New Users</h2>
        <div className="h-48">
          <Chart type="line" data={newUsersData} />
        </div>
      </div>
      <div className="flex-1 bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Active Subscriptions</h