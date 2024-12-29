import React from 'react';
import InsuranceCompanyDashboard from './InsuranceCompanyDashboard';
import RetailerDashboard from './RetailerDashboard';

// Mock user type - in a real app, this would come from auth context
const userType: 'insurance' | 'retailer' = 'insurance';

const Dashboard = () => {
  return userType === 'insurance' ? (
    <InsuranceCompanyDashboard />
  ) : (
    <RetailerDashboard />
  );
};

export default Dashboard;