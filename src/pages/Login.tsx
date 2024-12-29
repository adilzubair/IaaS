import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'insurance' | 'retailer'>('insurance');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials and set user type in context
    localStorage.setItem('userType', userType);
    navigate(userType === 'insurance' ? '/insurance' : '/retailer');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Shield className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to InsuranceIQ</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value as 'insurance' | 'retailer')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="insurance">Insurance Company</option>
              <option value="retailer">Retailer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;