import React from 'react';
import { Store } from 'lucide-react';

const RetailersList = () => {
  const retailers = [
    {
      id: '1',
      name: 'TechMart',
      activePolicies: 2,
      totalSales: 35,
      revenue: '150 AED',
    },
    {
      id: '2',
      name: 'HomeGoods',
      activePolicies: 1,
      totalSales: 22,
      revenue: '110 AED',
    },
    {
      id: '3',
      name: 'FashionStore',
      activePolicies: 1,
      totalSales: 18,
      revenue: '90 AED',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Active Retailers</h2>
      <div className="space-y-4">
        {retailers.map((retailer) => (
          <div key={retailer.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
            <Store className="h-6 w-6 text-blue-600" />
            <div className="flex-1">
              <h3 className="font-medium">{retailer.name}</h3>
              <div className="mt-1 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Active Policies</p>
                  <p className="font-medium">{retailer.activePolicies}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Sales</p>
                  <p className="font-medium">{retailer.totalSales}</p>
                </div>
                <div>
                  <p className="text-gray-600">Revenue</p>
                  <p className="font-medium text-blue-600">{retailer.revenue}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetailersList;