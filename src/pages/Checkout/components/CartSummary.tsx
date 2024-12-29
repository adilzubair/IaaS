import React from 'react';
import { useInsurancePlans } from '../../../store/insurancePlans';

interface CartSummaryProps {
  selectedInsurance: string | null;
}

const CartSummary = ({ selectedInsurance }: CartSummaryProps) => {
  const { plans } = useInsurancePlans();
  const selectedPlan = plans.find(plan => plan.id === selectedInsurance);
  
  const cartTotal = 499;
  const insurancePrice = selectedPlan ? parseFloat(selectedPlan.price) : 0;
  const total = cartTotal + insurancePrice;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{cartTotal} AED</span>
        </div>
        {selectedPlan && (
          <div className="flex justify-between text-blue-600">
            <span>{selectedPlan.name}</span>
            <span>+{selectedPlan.price} AED</span>
          </div>
        )}
        <div className="border-t pt-3 font-semibold flex justify-between">
          <span>Total</span>
          <span>{total} AED</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;