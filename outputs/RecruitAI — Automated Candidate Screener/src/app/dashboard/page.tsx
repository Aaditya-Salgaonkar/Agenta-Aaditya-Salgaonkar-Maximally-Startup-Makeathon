```typescript
// resume-ai-dashboard/src/components/AdminDashboard/index.tsx

import React from 'react';
import Revenue from './Revenue';
import Users from './Users';
import Logs from './Logs';

interface Props {}

const AdminDashboard: React.FC<Props> = () => {
  return (
    <div className="flex">
      <div className="w-1/3 border-r-2">
        <Revenue />
      </div>
      <div className="w-1/3 border-r-2">
        <Users />
      </div>