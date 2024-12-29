import React, { useState } from 'react';
import CartSummary from './components/CartSummary';
import InsuranceOptions from './components/InsuranceOptions';
import PaymentForm from './components/PaymentForm';
import { useInsurancePlans } from '../../store/insurancePlans';

const Checkout = () => {
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null);
  const { plans } = useInsurancePlans();
  const hasIntegratedPlans = plans.some(plan => plan.integrated);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {hasIntegratedPlans && (
            <InsuranceOptions
              selectedInsurance={selectedInsurance}
              onSelectInsurance={setSelectedInsurance}
            />
          )}
          <PaymentForm />
        </div>
        <CartSummary selectedInsurance={selectedInsurance} />
      </div>
    </div>
  );
};

export default Checkout;