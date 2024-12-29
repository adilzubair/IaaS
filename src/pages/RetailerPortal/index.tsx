import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';
import StatsCard from '../../components/shared/StatsCard';
import InsuranceList from './components/InsuranceList';
import IntegrationGuide from './components/IntegrationGuide';

const RetailerPortal = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Retailer Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Active Integrations"
          value="3"
          icon={Shield}
          trend="+1"
        />
        <StatsCard
          title="Insurance Sales"
          value="127"
          icon={Users}
          trend="+15"
        />
        <StatsCard
          title="Commission Earned"
          value="300 AED"
          icon={TrendingUp}
          trend="+12.5%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InsuranceList />
        <IntegrationGuide />
      </div>
    </div>
  );
};

export default RetailerPortal;