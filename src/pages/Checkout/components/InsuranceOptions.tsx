import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useInsurancePlans } from '../../../store/insurancePlans';

interface InsuranceOptionsProps {
  selectedInsurance: string | null;
  onSelectInsurance: (id: string | null) => void;
}

const InsuranceOptions = ({ selectedInsurance, onSelectInsurance }: InsuranceOptionsProps) => {
  const { plans } = useInsurancePlans();
  const integratedPlans = plans.filter(plan => plan.integrated);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Protect Your Purchase</h2>
      
      {integratedPlans.map((plan) => (
        <div
          key={plan.id}
          className={cn(
            'border rounded-lg p-4 cursor-pointer transition-colors mb-2',
            selectedInsurance === plan.id
              ? 'border-blue-500 bg-blue-50'
              : 'hover:border-gray-300'
          )}
          onClick={() => onSelectInsurance(
            selectedInsurance === plan.id ? null : plan.id
          )}
        >
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{plan.name}</h3>
                <span className="text-blue-600">{plan.price} AED</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{plan.coverage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsuranceOptions;