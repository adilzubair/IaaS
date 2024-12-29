import React from 'react';
import { Shield } from 'lucide-react';
import Card from '../../../components/shared/Card';

const PolicyPerformance = () => {
  const policies = [
    {
      id: '1',
      name: 'Delivery Protection',
      revenue: '300 AED',
      retailers: 8,
      sales: 64,
    },
    {
      id: '2',
      name: 'Product Protection',
      revenue: '200 AED',
      retailers: 5,
      sales: 42,
    },
  ];

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Policy Performance</h2>
      <div className="space-y-4">
        {policies.map((policy) => (
          <div key={policy.id} className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-blue-600 mt-1" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{policy.name}</h3>
                  <span className="text-blue-600">{policy.revenue}</span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p>Active Retailers</p>
                    <p className="font-medium text-gray-900">{policy.retailers}</p>
                  </div>
                  <div>
                    <p>Total Sales</p>
                    <p className="font-medium text-gray-900">{policy.sales}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PolicyPerformance;