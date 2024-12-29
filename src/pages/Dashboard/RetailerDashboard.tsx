import React from 'react';
import { DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import StatsCard from './components/StatsCard';
import TransactionList from './components/TransactionList';
import CommissionChart from './components/CommissionChart';

const RetailerDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Retailer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard
          title="Total Commission"
          value="300 AED"
          icon={DollarSign}
          trend="+8.3%"
        />
        <StatsCard
          title="Insurance Sales"
          value="42"
          icon={ShoppingCart}
          trend="+5"
        />
        <StatsCard
          title="Conversion Rate"
          value="15.3%"
          icon={TrendingUp}
          trend="+2.1%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommissionChart />
        <TransactionList />
      </div>
    </div>
  );
};

export default RetailerDashboard;