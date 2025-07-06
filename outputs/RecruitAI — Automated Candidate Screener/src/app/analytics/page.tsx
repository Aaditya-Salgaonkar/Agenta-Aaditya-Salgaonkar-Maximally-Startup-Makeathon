typescript
// Dashboard.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

interface DashboardProps {
  data: any;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;