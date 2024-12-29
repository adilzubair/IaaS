import React from 'react';
import { Shield, Edit, Trash2 } from 'lucide-react';
import Card from '../../../components/shared/Card';
import { useInsurancePlans } from '../../../store/insurancePlans';

const PlansList = () => {
  const { plans, removePlan } = useInsurancePlans();

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Your Insurance Plans</h2>
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
                <p className="text-sm text-gray-600 mt-2">Coverage: {plan.coverage}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{plan.retailers} retailers</span>
                    <span>{plan.activePolicies} active policies</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-600 hover:text-red-600" onClick={() => removePlan(plan.id)}>
                      <Trash2 className="h-4 w-4" />
                    </button>
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

export default PlansList;