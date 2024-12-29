import React from 'react';
import { cn } from '../../../lib/utils';

const TransactionList = () => {
  const transactions = [
    { id: '1', date: '2024-03-15', amount: '10 AED', status: 'Success' },
    { id: '2', date: '2024-03-14', amount: '15 AED', status: 'Success' },
    { id: '3', date: '2024-03-13', amount: '12 AED', status: 'Failed' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-md"
          >
            <div>
              <p className="font-medium">{transaction.amount}</p>
              <p className="text-sm text-gray-600">{transaction.date}</p>
            </div>
            <span className={cn(
              'px-2 py-1 rounded-full text-sm',
              transaction.status === 'Success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            )}>
              {transaction.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;