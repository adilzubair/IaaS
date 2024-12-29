import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Card from '../../../components/shared/Card';
import { useInsurancePlans } from '../../../store/insurancePlans';

const AddInsurancePlan = () => {
  const addPlan = useInsurancePlans((state) => state.addPlan);
  const [plan, setPlan] = useState({
    name: '',
    description: '',
    coverage: '',
    price: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPlan(plan);
    setPlan({ name: '', description: '', coverage: '', price: '' });
  };

  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <Plus className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Add New Insurance Plan</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Plan Name</label>
          <input
            type="text"
            value={plan.name}
            onChange={(e) => setPlan({ ...plan, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={plan.description}
            onChange={(e) => setPlan({ ...plan, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Coverage Details</label>
          <textarea
            value={plan.coverage}
            onChange={(e) => setPlan({ ...plan, coverage: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Price (AED)</label>
          <input
            type="number"
            value={plan.price}
            onChange={(e) => setPlan({ ...plan, price: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
            step="0.01"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Insurance Plan
        </button>
      </form>
    </Card>
  );
};

export default AddInsurancePlan;