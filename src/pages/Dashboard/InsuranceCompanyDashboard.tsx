import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';
import StatsCard from './components/StatsCard';
import TransactionList from './components/TransactionList';
import PolicyForm from './components/PolicyForm';

const InsuranceCompanyDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Insurance Company Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Total Revenue"
          value="600 AED"
          icon={TrendingUp}
          trend="+12.5%"
        />
        <StatsCard
          title="Active Policies"
          value="5"
          icon={Shield}
          trend="+2"
        />
        <StatsCard
          title="Customers Protected"
          value="127"
          icon={Users}
          trend="+15"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PolicyForm />
        <TransactionList />
      </div>
    </div>
  );
};

export default InsuranceCompanyDashboard;