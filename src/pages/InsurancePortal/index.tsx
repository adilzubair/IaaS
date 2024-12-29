import React from 'react';
import { DollarSign, Store, TrendingUp } from 'lucide-react';
import StatsCard from '../../components/shared/StatsCard';
import AddInsurancePlan from './components/AddInsurancePlan';
import PlansList from './components/PlansList';

const InsurancePortal = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Insurance Company Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Total Revenue"
          value="600 AED"
          icon={DollarSign}
          trend="+12.5%"
        />
        <StatsCard
          title="Active Retailers"
          value="15"
          icon={Store}
          trend="+3"
        />
        <StatsCard
          title="Active Policies"
          value="127"
          icon={TrendingUp}
          trend="+15%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AddInsurancePlan />
        <PlansList />
      </div>
    </div>
  );
};

export default InsurancePortal;