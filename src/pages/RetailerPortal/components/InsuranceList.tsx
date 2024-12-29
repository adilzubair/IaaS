import React from 'react';
import { Shield } from 'lucide-react';
import { useInsurancePlans } from '../../../store/insurancePlans';

const InsuranceList = () => {
  const { plans, toggleIntegration } = useInsurancePlans();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Available Insurance Options</h2>
      <div className="space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-blue-600 mt-1" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  <span className="text-blue-600">{plan.price} AED</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.coverage}</p>
                <button
                  onClick={() => toggleIntegration(plan.id)}
                  className={`mt-3 px-4 py-2 rounded-md text-sm font-medium ${
                    plan.integrated
                      ? 'bg-gray-100 text-gray-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.integrated ? 'Integrated' : 'Add to Store'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceList;