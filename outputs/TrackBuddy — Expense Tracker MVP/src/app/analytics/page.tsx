typescript
// Dashboard.tsx

import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

interface IDashboardProps {
  incomeData: any;
  expenseData: any;
}

const Dashboard: React.FC<IDashboardProps> = ({ incomeData, expenseData }) => {
  const state = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: '#f7931a',
        borderColor: 'rgba(247, 147, 26, 1)',
        borderWidth: 1,
        hoverBackgroundColor: '#f7931a',
        hoverBorderColor: 'rgba(247, 147, 26, 1)',
        data: incomeData,
      },
      {
        label: 'Expense',
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: expenseData,
      },
    ],
  };

  const incomeState = {
    labels: incomeData.map((item: any) => item.category),
    datasets: [
      {
        label: 'Income',
        backgroundColor: '#f7931a',
        data: incomeData.map((item: any) => item.amount),
      },
    ],
  };

  const expenseState = {
    labels: expenseData.map((item: any) => item.category),
    datasets: [
      {
        label: 'Expense',
        backgroundColor: 'rgba(54, 162, 235, 1)',
        data: expenseData.map((item: any) => item.amount),
      },
    ],
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Overview
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  $56,845
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                  <i className="fas fa-chart-pie" />
                </div>
              </div>
            </div>
            <Line data={state} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Income by Category
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  $24,567
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                  <i className="fas fa-chart-bar" />
                </div>
              </div>
            </div>
            <Bar data={incomeState} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Expense by Category
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  $32,278
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                  <i className="fas fa-chart-pie" />
                </div>
              </div>
            </div>
            <Doughnut data={expenseState} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;