import React from 'react';
import RevenueCard from './RevenueCard';
import NewUsersCard from './NewUsersCard';
import SubscriptionsCard from './SubscriptionsCard';
import RecentActivityTable from './RecentActivityTable';
import ChartsPlaceholder from './ChartsPlaceholder';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <div className="lg:w-1/3">
        <RevenueCard />
        <NewUsersCard />
        <SubscriptionsCard />
      </div>
      <div className="lg:w-2/3">
        <RecentActivityTable />
        <ChartsPlaceholder />
      </div>
    </div>
  );
};

export default Dashboard;

// RevenueCard.js
import React from 'react';
import { barChartData } from './chartData';
import Chart from 'react-apexcharts';

const RevenueCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">Revenue</h3>
        <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Last 30 days
        </div>
      </div>
      <div className="mt-5 flow-root">
        <Chart
          type="bar"
          width={500}
          height={300}
          series={barChartData.series}
          options={barChartData.options}
        />
      </div>
    </div>
  );
};

export default RevenueCard;

// NewUsersCard.js
import React from 'react';
import { lineChartData } from './chartData';
import Chart from 'react-apexcharts';

const NewUsersCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">New Users</h3>
        <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Last 30 days
        </div>
      </div>
      <div className="mt-5 flow-root">
        <Chart
          type="line"
          width={500}
          height={300}
          series={lineChartData.series}
          options={lineChartData.options}
        />
      </div>
    </div>
  );
};

export default NewUsersCard;

// SubscriptionsCard.js
import React from 'react';
import { pieChartData } from './chartData';
import Chart from 'react-apexcharts';

const SubscriptionsCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">
          Active Subscriptions
        </h3>
        <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          This month
        </div>
      </div>
      <div className="mt-5 flow-root">
        <Chart
          type="pie"
          width={500}
          height={300}
          series={pieChartData.series}
          options={pieChartData.options}
        />
      </div>
    </div>
  );
};

export default SubscriptionsCard;

// RecentActivityTable.js
import React from 'react';

const RecentActivityTable = () => {
  const data = [
    {
      id: 1,
      username: 'Alex',
      action: 'created',
      time: '2h ago',
      type: 'project',
      project: 'GraphQL API',
    },
    {
      id: 2,
      username: 'Jane',
      action: 'updated',
      time: '4h ago',
      type: 'task',
      project: 'GraphQL API',
    },
    {
      id: 3,
      username: 'Bob',
      action: 'deleted',
      time: '12h ago',
      type: 'project',
      project: 'GraphQL API',
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-4">
      <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
      <div className="mt-4 space-y-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Project
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {item.action}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.project}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityTable;

// ChartsPlaceholder.js
import React from 'react';

const ChartsPlaceholder = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mb-4">
      <h3 className="text-base font-semibold text-gray-900">Charts Placeholder</h3>
      <div className="mt-5 flow-root">
        <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default ChartsPlaceholder;

// chartData.js
export const barChartData = {
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
  },
};

export const lineChartData = {
  series: [
    {
      name: 'New Users',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 27, 40, 35],
    },
  ],
  options: {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      title: {
        text: 'Users',
      },
    },
  },
};

export const pieChartData = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Desktop', 'Tablet', 'Phablet', 'Mobile', 'Others'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};