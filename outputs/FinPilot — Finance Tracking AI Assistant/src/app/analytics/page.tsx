typescript
// Dashboard.tsx

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface IDashboardProps {
  incomeData: { label: string; value: number }[];
  expenseData: { label: string; value: number }[];
  savingsData: { label: string; value: number }[];
}

const Dashboard: React.FC<IDashboardProps> = ({ incomeData, expenseData, savingsData }) => {
  const barChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const lineChartOptions = {
    responsive: true,
    tension: 0.4,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const barChartData = {
    labels: incomeData.map((data) => data.label),
    datasets: [
      {
        label: 'Income',
        data: incomeData.map((data) => data.value),
        backgroundColor: '#4caf50',
      },
      {
        label: 'Expenses',
        data: expenseData.map((data) => data.value),
        backgroundColor: '#f44336',
      },
    ],
  };

  const lineChartData = {
    labels: savingsData.map((data) => data.label),
    datasets: [
      {
        label: 'Savings',
        data: savingsData.map((data) => data.value),
        borderColor: '#3f51b5',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Bar options={barChartOptions} data={barChartData} />
      <Line options={lineChartOptions} data={lineChartData} />
    </div>
  );
};

export default Dashboard;